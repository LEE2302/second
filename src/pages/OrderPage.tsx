import axios from 'axios';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import BottomOrder from '../components/BottomOrder';
import Header from '../components/Header';

function OrderPage() {
  async function getEvent() {
    const response = await axios.get('http://localhost:3001/items');
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
      <Header />
      {isPending && (
        <div>
          <p>목록을</p>
          <p>불러오고 있습니다.</p>
        </div>
      )}
      <div>오더페이지</div>
      <BottomOrder />
    </Container>
  );
}

export default OrderPage;

const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  padding-top: 57px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
