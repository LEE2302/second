import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import CompletePage from './CompletePage';
import ErrorPage from './ErrorPage';
import OrderPage from './OrderPage';

function RoutingPage() {
  // // 헤더 분기처리
  // const { pathname } = useLocation();
  // const location = useLocation();
  // const [condition, setCondition] = useState(false);

  // useEffect(() => {
  //   if (pathname === '/order') {
  //     setCondition(true);
  //   } else {
  //     setCondition(false);
  //   }
  // }, [pathname]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default RoutingPage;

const Container = styled.div`
  width: 350px;
  height: 864px;
`;
