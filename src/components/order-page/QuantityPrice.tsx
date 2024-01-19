import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi';
import useQuantityPriceStroe from '../../store/useStroe';

interface QuantityPriceProps {
  price: number;
  id: string;
  quantity: number;
}

function QuantityPrice({ price, id, quantity }: QuantityPriceProps) {
  // 정규식 사용해서 천단위 ,(콤마) 추가
  const priceRgb = price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const { plusQuantity, minusQuantity } = useQuantityPriceStroe();

  return (
    <QuantityPriceDiv>
      <div>
        <button
          type="button"
          aria-label="minus-button"
          onClick={() => minusQuantity(id)}
        >
          <FiMinus />
        </button>
        <span className="quantity">{quantity}</span>
        <button
          type="button"
          aria-label="plus-button"
          onClick={() => plusQuantity(id)}
        >
          <FiPlus />
        </button>
      </div>
      <div>
        {priceRgb}
        원
      </div>
    </QuantityPriceDiv>
  );
}

export default QuantityPrice;

const QuantityPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .quantity {
    margin: 0px 5px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
