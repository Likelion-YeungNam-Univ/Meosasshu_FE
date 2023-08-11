import React from "react";
import styled from "styled-components";
import Category from "../assets/카테고리.png";
import Delive from "../assets/배송정보.png";
import Mypage from "../assets/마이페이지.png";
import Order from "../assets/주문조회.png";
import Recommend from "../assets/추천상품.png";
import logo from '../assets/logo.png';
import Search from "../components/Search";
import "../assets/font/style.css"

const Main = () => {
  return (
    <>
    <GlobalStyle>
      <NavContainer>
        <Logo>
          <img src={logo} alt="로고" />
        </Logo>

        <Search />
      </NavContainer>
      <NavGrid>
        <NavItem>
          <img src={Category} alt="카테고리" />
        </NavItem>
        <NavItem>
          <img src={Delive} alt="배송정보" />
        </NavItem>
        <NavItem>
          <img src={Order} alt="주문조회" />
        </NavItem>
        <NavItem>
          <img src={Mypage} alt="마이페이지" />
        </NavItem>
      </NavGrid>
      <RecommendSection>
        <h3>50대를 위한 추천 상품</h3>
        <p>더보기> </p>
      </RecommendSection>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={Recommend} alt="추천상품" />
      </div>
      </GlobalStyle>
    </>
  );
};

export default Main;

const GlobalStyle = styled.div`
  body {
   font-family: Inter Italic;
  }
  font-family: Inter Italic;
`;

const Logo = styled.div`
  display: flex;
  width: 15vw;
  height: auto;
  margin-right: 10px;
  margin: 5px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// 카테고리, 배송정보, 주문조회, 마이페이지를 감싸는 컨테이너 스타일
const NavContainer = styled.div`
  display: flex;
  align-items: center; /* 로고와 검색 컴포넌트 가운데 정렬 */
  margin-bottom: 10px;
`;

// 네비게이션 아이템을 담을 그리드 스타일
const NavGrid = styled.div`
  margin-top: 30px;
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

// 추천 상품 섹션 스타일
const RecommendSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  h3 {
    margin-left: 10px;
    text-weight: bold;
  }
  p {
    margin-left: 130px;
    cursor: pointer;
    color: #B4B4B4;
  }
`;
