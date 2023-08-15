import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;  // 항목들을 중앙에 배치
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 430px) {
      max-width: auto;
  }
`;

const BackButton = styled(Link)`
  position: absolute;  // 절대 위치 지정
  left: 5px;  // 왼쪽으로 부터의 거리
`;

const Nav = (props) => {
  return (
    <NavbarContainer>
       <BackButton to={props.backTo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black"/>
        </svg>
      </BackButton>
      <span style={{ fontSize: '20px', fontWeight: '600' }}>{props.children}</span>
    </NavbarContainer>
  );
};

export default Nav;
