import styled from 'styled-components';

function LoadingText() {
  return (
    <Container>
      <p>
        목록을
        <br />
        불러오고 있습니다.
      </p>
    </Container>
  );
}

export default LoadingText;

const Container = styled.div`
  > p {
    text-align: center;
  }
`;
