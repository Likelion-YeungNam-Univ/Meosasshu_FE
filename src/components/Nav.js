import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackButton = styled(Link)`
margin-left:5px;
  
  
`;

const NavBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
    margin-top: 10px;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
margin-top: 10px;
}`;


const NavContent = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = ({ backTo = '/', children }) => {
  return (
    <NavBox>
      {/* <NavbarContainer> */}
       <BackButton to={backTo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black"/>
        </svg>
      </BackButton>
      <NavContent>
      <span style={{ fontSize: '20px', fontWeight: '600'}}>{children}</span>
      </NavContent>
      <BackButton >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#FFF"/>
        </svg>
      </BackButton>
     {/* </NavbarContainer> */}
    </NavBox>
  );
};

export default Nav;
