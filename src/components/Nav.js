import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackIcon from '../assets/arrow.png';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px 3px;
  border: 1px solid #fff;
  background-image: url(${BackIcon});
  background-size: cover;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;


const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* 중앙 정렬을 위해 추가 */
  margin-right:25px;
`;

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <BackButton to="/" />
      <CenteredContent>
        {typeof props.children === 'string' ? props.children : ' '}
      </CenteredContent>
    </NavbarContainer>
  );
};

export default Navbar;