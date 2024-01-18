import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  const navigate = useNavigate();

  function orderHandler() {
    navigate('/order');
  }

  return (
    <Container>
      <DivImg>
        <img src="/images/logo-home.png" alt="homeLogo" />
      </DivImg>
      <DivButton onClick={orderHandler}>주문하러 가기</DivButton>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: #000000;
`;

const DivImg = styled.div`
  margin-bottom: 41px;

  > img {
    width: 150px;
    height: 51px;
  }
`;

const DivButton = styled.button`
  height: 88px;
  width: 172px;
  background-color: #ffffff;

  border: none;
  border-radius: 20px;

  cursor: pointer;

  font-size: 25px;
`;
