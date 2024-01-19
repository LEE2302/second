import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import ItemBox from '../components/order-page/ItemBox';
import LoadingText from '../components/order-page/LoadingText';
import useQuantityPriceStroe from '../store/useStroe';
import getEvent from '../util/http';

interface ItemProps {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
  quantity?: number;
}

function OrderPage() {
  const { items, setItems } = useQuantityPriceStroe();

  const { data, isPending, isError } = useQuery({
    queryKey: ['items'],
    queryFn: ({ signal }) => getEvent({ signal }),
  });

  // 데이터 쥬스탠드 상태에 넣기
  useEffect(() => {
    setItems(data);
  }, [setItems, data]);

  return (
    <Container>
      {isPending && <LoadingText />}
      {isError && <LoadingText text="불러오기에 실패했습니다." />}
      <ul>
        {items
          && items.map((item: ItemProps) => (
            <ItemBox
              key={item.id}
              name={item.name}
              event={item.event}
              price={item.price}
              id={item.id}
              quantity={item.quantity || 0}
            />
          ))}
      </ul>
    </Container>
  );
}

export default OrderPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 57px;
  padding-bottom: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > ul {
    overflow: scroll;
    > li:last-child {
      margin-bottom: 18px;
    }
  }
`;
