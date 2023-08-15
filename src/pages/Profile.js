import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OrderCheck from "../assets/주문 목록.png"
import Cancel from "../assets/취소 교환 환불 내역.png"
import Setting from "../assets/환경 설정.png"
import Logout from "../assets/Logout.png"

const Profile = () => {
  return (
    <>
      <Header>내 정보</Header>
      <Body>
        <Line />
        <ContentWrapper>
          <LeftIcon src={OrderCheck} alt="ordercheck" />
          <h2>주문 조회</h2>
          <ArrowForwardIosIcon />
        </ContentWrapper>

        <Line />
        <ContentWrapper>
          <LeftIcon src={Cancel} alt="취소 교환 환불 내역" />
          <h2>취소/교환/환불 내역</h2>
          <ArrowForwardIosIcon />
        </ContentWrapper>

        <Line />
        <ContentWrapper>
          <LeftIcon src={Setting} alt="회원정보 수정" />
          <h2>회원정보 수정</h2>
          <ArrowForwardIosIcon />
        </ContentWrapper>

        <Line />
        <ContentWrapper>
          <LeftIcon src={Logout} alt="로그아웃" />
          <h2>로그아웃</h2>
          <ArrowForwardIosIcon />
        </ContentWrapper>

        <Line />
      </Body>
    </>
  );
};

export default Profile;
const Body = styled.div`
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f0f1f5;
`;

const LeftIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px; // 아이콘과 텍스트 사이의 간격을 조절합니다.
`;
