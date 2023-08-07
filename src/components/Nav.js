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
  background-image: url(${BackIcon}); // 아이콘 이미지를 배경 이미지로 설정
  background-size: cover; // 배경 이미지 크기를 조정
  width: 20px; // 버튼의 크기를 조정
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <BackButton to="/"/>
    </NavbarContainer>
  );
};

export default Navbar;