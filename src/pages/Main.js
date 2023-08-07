import React from "react";
import styled from "styled-components";
import Category from "../assets/카테고리.png";
import Delive from "../assets/배송정보.png";
import Mypage from "../assets/마이페이지.png";
import Order from "../assets/주문조회.png";
import Recommend from "../assets/추천상품.png";
import logo from '../assets/logo.png';
import Search from "../components/Search";

const Main = () => {
  return (
    <>
      <NavContainer>
        <Logo src={logo} alt="로고">
        </Logo>
       <Search />
      </NavContainer>
      <NavGrid>
        {/* 카테고리 */}
        <NavItem>
          <img src={Category} alt="카테고리" />
        </NavItem>
        {/* 배송정보 */}
        <NavItem>
          <img src={Delive} alt="배송정보" />
        </NavItem>
        {/* 주문조회 */}
        <NavItem>
          <img src={Order} alt="주문조회" />
        </NavItem>
        {/* 마이페이지 */}
        <NavItem>
          <img src={Mypage} alt="마이페이지" />
        </NavItem>
      </NavGrid>
      <p>50대를 위한 추천 상품</p>
      <p>더보기</p>
      <img src={Recommend} alt="마이페이지" />
      
    </>
  );
};

export default Main;

const Logo = styled.div`
display: flex;
width: 12vw; /* 로고 너비 조절 */
height: 6vh; /* 로고 높이 조절 */

// img {
//   width: 100%; /* 로고 이미지 가로 크기를 컨테이너에 맞추기 */
//   height: 100%; /* 이미지 비율 유지 */
// }
`;


// 카테고리, 배송정보, 주문조회, 마이페이지를 감싸는 컨테이너 스타일
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 로고와 검색 컴포넌트 가운데 정렬 */
  margin-bottom: 10px;
`;

// Logo 스타일 수정
// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   width: 10vw; /* 로고 너비 조절 */
//   height: 6vh; /* 로고 높이 조절 */
// `;

// 네비게이션 아이템을 담을 그리드 스타일
const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(175px, auto); /* 세로 크기 설정 */
  gap: 0; /* 간격 없음 */
`;

// NavGrid 내부 요소들의 스타일
const NavItem = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%; /* 세로 크기를 셀 크기에 맞게 조절 */
    object-fit: cover; /* 이미지 비율 유지하며 셀 내에 꽉 차게 표시 */
  }
`;
