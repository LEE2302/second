import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TextProps {
  text?: string;
}

function LoadingText({ text }: TextProps) {
  // 로딩 ... 하기위한 코드
  const [loadingText, setLoadingText] = useState('불러오고 있습니다.');
  const [dots, setDots] = useState(1);
  // useEffect 클린업 함수를 사용하여 마운트가 끝나면 클리어
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots === 3 ? 1 : prevDots + 1));
    }, 200); // 0.2초 간격으로 점 개수 업데이트

    return () => clearInterval(intervalId); // 클린함수
  }, []);

  // dots가 추가될때마다(업데이트) 실행이 됨으로 로딩 ... 이 된다.
  useEffect(() => {
    setLoadingText(`불러오고 있습니다${'.'.repeat(dots)}`);
  }, [dots]);

  return (
    <Container>
      <p>
        목록을
        <br />
        {text || loadingText}
      </p>
    </Container>
  );
}

export default LoadingText;

const Container = styled.div`
  > p {
    text-align: center;
  }
`;
