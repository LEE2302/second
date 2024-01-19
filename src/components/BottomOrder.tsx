import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useQuantityPriceStroe from '../store/useStroe';

interface ButtonProps {
  $totalQuantity: number;
}

function BottomOrder() {
  const { totalQuantity, totalPrice } = useQuantityPriceStroe();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const totalPriceRgb = totalPrice && totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 로딩 ... 하기위한 코드
  const [loading, setLoading] = useState(false);

  function orderButtonHandler() {
    setLoading(true);
    // 주문 요청 성공테스트: true변경/ 실패테스트: false로 변경하면 됩니다.
    setIsSuccess(true);
  }

  useEffect(() => {
    if (loading) {
      if (isSuccess) {
        navigate('/complete');
      }

      if (!isSuccess) {
        navigate('/error');
      }
    }
  }, [loading]);

  return (
    <Container>
      <TotalsDiv>
        <p>{`총 수량 : ${totalQuantity}개`}</p>
        <p>{`총 가격 : ${totalPriceRgb}원`}</p>
      </TotalsDiv>
      <OrderButtonDiv $totalQuantity={totalQuantity}>
        <button
          type="button"
          disabled={totalQuantity === 0}
          onClick={orderButtonHandler}
        >
          {loading ? '로딩중...' : '주문하기'}
        </button>
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

const OrderButtonDiv = styled.div<ButtonProps>`
  > button {
    cursor: pointer;
    border: none;
    color: #ffffff;
    background-color: ${(props) => (props.$totalQuantity !== 0 ? '#000000' : '#c1c1c1')};

    width: 301px;
    height: 47.92px;
    font-size: 18px;
  }
`;
