import styled from 'styled-components';

// import { useState } from 'react';
import QuantityPrice from './QuantityPrice';

interface ItemBoxProps {
  name: string;
  event: number;
  price: number;
  id: string;
  quantity: number;
}

interface ContentProps {
  $count: number;
}

function ItemBox({
  name, event, price, id, quantity,
}: ItemBoxProps) {
  return (
    <Container $count={quantity}>
      <div className="box" />
      <ContentDiv>
        <TitleDiv>
          <div className="name">{name}</div>
          {event && <div className="event-box">이벤트</div>}
        </TitleDiv>
        <QuantityPrice price={price} id={id} quantity={quantity} />
      </ContentDiv>
    </Container>
  );
}

export default ItemBox;

const Container = styled.li<ContentProps>`
  display: flex;

  width: 301px;
  height: 80px;
  padding: 9px 12px;
  margin-top: 18px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* 카운터가 1이상이면 색상 변경 */
  background-color: ${(props) => (props.$count === 0 ? '#ffffff' : 'rgba(247, 90, 47, 0.1)')};

  .box {
    width: 62px;
    height: 62px;
    background-color: #d9d9d9;
    margin-right: 10px;
  }
`;

const ContentDiv = styled.div`
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
