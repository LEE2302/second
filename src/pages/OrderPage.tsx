import axios from 'axios';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
// import BottomOrder from '../components/BottomOrder';
// import Header from '../components/Header';
import ItemBox from '../components/order-page/ItemBox';

interface ItemProps {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

function OrderPage() {
  async function getEvent() {
    const response = await axios
      .get('http://localhost:3001/items')
      .then(({ data }) => data);
    return response;
  }

  const {
    data, isPending, isError, error,
  } = useQuery({
    queryKey: ['items'],
    queryFn: getEvent,
  });

  console.log(data);
  console.log(isError);
  console.log(error);

  return (
    <Container>
      {/* <Header /> */}
      {isPending && (
        <div>
          <p>목록을</p>
          <p>불러오고 있습니다.</p>
        </div>
      )}
      <ul>
        {data
          && data.map((item: ItemProps) => (
            <ItemBox name={item.name} event={item.event} price={item.price} />
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
