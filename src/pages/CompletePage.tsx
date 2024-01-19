import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function CompletePage() {
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
      <img src="/images/check-filled.png" alt="checkImg" />
      <p>주문이 완료되었습니다.</p>
    </Container>
  );
}

export default CompletePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
