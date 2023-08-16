import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OrderCheck from "../assets/주문 목록.png"
import Cancel from "../assets/취소 교환 환불 내역.png"
import Setting from "../assets/환경 설정.png"
import Logout from "../assets/Logout.png"
import { useNavigate } from 'react-router-dom'; 
import TapBar from "../components/TapBar";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate(); 
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const url = "https://6503-158-247-236-58.ngrok-free.app"
  const accessToken = localStorage.getItem("accessToken");
  const handleLogout = async () => {
    try {
      const response = await axios.post(url + "/api/v1/auth/logout", {
        'accessToken': accessToken
      });

      if (response.status === 200) {
        navigate("/"); // 로그아웃 성공 시 메인 페이지로 이동
      } else {
        console.error("로그아웃 실패");
      }
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };
  return (
    <>
      <Header>내 정보</Header>
      <Body>
        <Line />
        <ContentWrapper>
          <LeftIcon src={OrderCheck} alt="ordercheck" />
          <h2>주문 조회</h2>
          <ArrowForwardIosIcon onClick={() => navigate('/orderinquiry')} role="button" tabIndex={0} />
        </ContentWrapper>

        <Line />
        <ContentWrapper>
          <LeftIcon src={Cancel} alt="취소 교환 환불 내역" />
          <h2>취소/교환/환불 내역</h2>
          <ArrowForwardIosIcon onClick={() => navigate('/cancelhistory')} role="button" tabIndex={0} />
        </ContentWrapper>

        <Line />
        <ContentWrapper>
          <LeftIcon src={Setting} alt="회원정보 수정" />
          <h2>회원정보 수정</h2>
          <ArrowForwardIosIcon onClick={() => navigate('/editmember')} role="button" tabIndex={0} />
        </ContentWrapper>

        <Line />
        <ContentWrapper>
          <LeftIcon src={Logout} alt="로그아웃" />
          <h2>로그아웃</h2>
          <ArrowForwardIosIcon onClick={() => setShowLogoutPopup(true)} role="button" tabIndex={0} />
        </ContentWrapper>

        <Line />
        <TapBar />

        {showLogoutPopup && (
          <Popup>
            <PopupInner>
              <PopupText>로그아웃을 하시겠습니까?</PopupText>
              <PopupButtonWrapper>
              <PopupButton onClick={handleLogout}>네</PopupButton>
              <PopupButton onClick={() => setShowLogoutPopup(false)}>아니오</PopupButton>
              </PopupButtonWrapper>
            </PopupInner>
          </Popup>
        )}
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
  margin-right: 10px;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupInner = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
`;

const PopupText = styled.p`
  margin-bottom: 20px;
`;

const PopupButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PopupButton = styled.button`
  width: 45%;
  padding: 10px;
  border: none;
  background-color: #BCC454;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #929294;
  }
`;
