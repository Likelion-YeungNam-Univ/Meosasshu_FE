import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
margin-top: 20px;
margin-bottom: 20px;

@media only screen and (max-width: 430px) {
    max-width: auto;
}`;

const BackButton = styled(Link)`
margin-left: 5px;
`;


const Nav = (props) => {
  return (
    <>
    <NavbarContainer>
      <BackButton to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black"/>
      </svg>
      </BackButton>

      <span style={{marginLeft:'150px', fontSize:'20px', fontWeight:'600'}}>{props.children}</span>
    </NavbarContainer>
    </>
  );
};

export default Nav;