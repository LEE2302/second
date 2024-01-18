import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoutingPage from './pages/RoutingPage';

function App() {
  const queryClinet = new QueryClient();

  return (
    <Container>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <RoutingPage />
        </BrowserRouter>
      </QueryClientProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
