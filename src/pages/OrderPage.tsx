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
  // 전역상태 가져오기
  const { items, setItems } = useQuantityPriceStroe();

  // http get요청
  const { data, isPending } = useQuery({
    queryKey: ['items'],
    queryFn: ({ signal }) => getEvent({ signal }),
    // 캐시 저장 10초
    staleTime: 10 * 1000,
  });

  // get응답 데이터 전역상태에 넣기
  useEffect(() => {
    setItems(data);
  }, [setItems, data]);

  // 데이터 로딩 페이지
  if (isPending) {
    return <LoadingText />;
  }

  return (
    <Container>
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
