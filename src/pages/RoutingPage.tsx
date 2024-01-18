import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Home from './Home';
import CompletePage from './CompletePage';
import ErrorPage from './ErrorPage';
import OrderPage from './OrderPage';
import Header from '../components/Header';
import BottomOrder from '../components/BottomOrder';

function RoutingPage() {
  // 헤더 분기처리
  const { pathname } = useLocation();
  const location = useLocation();
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (pathname === '/order') {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, [pathname]);

  return (
    <Container>
      {condition && <Header />}
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      {condition && <BottomOrder />}
    </Container>
  );
}

export default RoutingPage;

const Container = styled.div`
  width: 350px;
  height: 864px;
`;
