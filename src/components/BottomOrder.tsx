import styled from 'styled-components';

function BottomOrder() {
  return (
    <Container>
      <TotalsDiv>
        <p>총 수량 : 0개</p>
        <p>총 가격 : 0원</p>
      </TotalsDiv>
      <OrderButtonDiv>
        <button type="button">주문하기</button>
      </OrderButtonDiv>
    </Container>
  );
}

export default BottomOrder;

const Container = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  height: 170px;
  border-radius: 20px 20px 0px 0px;
  padding: 23px 27px 27px 23px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const TotalsDiv = styled.div`
  width: 100%;
  text-align: end;

  font-size: 18px;
`;

const OrderButtonDiv = styled.div`
  > button {
    border: none;
    background-color: #c1c1c1;

    width: 301px;
    height: 47.92px;
  }
`;
