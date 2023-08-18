import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OrderCheck from "../assets/주문 목록.png";
import Cancel from "../assets/취소 교환 환불 내역.png";
import Setting from "../assets/환경 설정.png";
import Logout from "../assets/Logout.png";
import { useNavigate } from 'react-router-dom'; 
import TapBar from "../components/TapBar";
import axios from "axios";
import ListenPopUp from "./ListenPopUp";

const Profile = () => {
  const navigate = useNavigate(); 
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const url = "http://118.67.134.65:8080";
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${url}/api/v1/auth/logout`,{},{
        headers : {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      });

      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("로그아웃 실패");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setShowLoginPopup(true);
      } else {
        console.error("로그아웃 실패:", error);
      }
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
        
        <TapBar onMicClick={() => setShowPopUp(true)} />

        {showPopUp && <ListenPopUp onClose={() => setShowPopUp(false)} />}
        
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

        {showLoginPopup && (
          <Popup>
            <PopupInner>
              <PopupText>로그인이 필요한 페이지입니다. <br /> 로그인 하시겠습니까?</PopupText>
              <PopupButtonWrapper>
                <PopupButton2 onClick={() => navigate('/login')}>로그인 하러 가기</PopupButton2>
              </PopupButtonWrapper>
            </PopupInner>
          </Popup>
        )}
      </Body>
    </>
  );
};

export default Profile;

const PopupButton2 = styled.div`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #BCC454;
  color: white; 
  border-radius: 5px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #929294;
}
`;

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
