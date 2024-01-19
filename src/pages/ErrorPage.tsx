import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 홈페이지로 이동
    const timeoutId = setTimeout(() => {
      navigate('/order');
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container>
      <p>주문에 실패하였습니다.</p>
      <p>다시 시도해주세요.</p>
    </Container>
  );
}

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
