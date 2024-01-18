import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface ItemBoxProps {
  name: string;
  event: number;
  price: number;
}

function ItemBox({ name, event, price }: ItemBoxProps) {
  return (
    <Container>
      <div className="box">박스</div>
      <ContentDiv>
        <TitleDiv>
          <div className="name">{name}</div>
          {event && <div className="event-box">이벤트</div>}
        </TitleDiv>
        <QuantityPriceDiv>
          <div>
            <button type="button" aria-label="minus-button">
              <FiMinus />
            </button>
            <span className="quantity">0</span>
            <button type="button" aria-label="plus-button">
              <FiPlus />
            </button>
          </div>
          <div>{price}</div>
        </QuantityPriceDiv>
      </ContentDiv>
    </Container>
  );
}

export default ItemBox;

const Container = styled.li`
  display: flex;

  width: 301px;
  height: 80px;
  padding: 9px 12px;
  margin-top: 18px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  .box {
    width: 62px;
    height: 62px;
    background-color: #d9d9d9;
    margin-right: 10px;
  }
`;

const ContentDiv = styled.div`
  background-color: beige;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;

  .name {
    font-size: 18px;
    margin-right: 5px;
  }

  .event-box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 53px;
    height: 23px;
    border-radius: 10px;
    background-color: #f75a2f;

    font-size: 13px;
    color: white;
  }
`;

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
