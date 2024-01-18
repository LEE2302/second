import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <button
        type="button"
        className="img-button"
        onClick={() => navigate('/')}
      >
        <img src="/images/logo-header.png" alt="headerLogo" />
      </button>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;

  width: 350px;
  height: 57px;
  padding-left: 12px;
  background-color: #000000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .img-button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    > img {
      width: 94.12px;
      height: 32px;
    }
  }
`;
