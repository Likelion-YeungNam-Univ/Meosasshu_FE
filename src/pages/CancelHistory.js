import React from "react";
import styled from "styled-components";  // 스타일링을 위해 추가
import Nav from "../components/Nav";

const CancelHistory = () => {
    return(
        <CancelHistoryBox>
            <Nav backTo="/profile">취소/교환/환불 내역</Nav>
            <CenteredText>취소/교환/환불 내역이 없습니다.</CenteredText>
        </CancelHistoryBox>
    )
}

export default CancelHistory;

const CancelHistoryBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const CenteredText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #929294;
  height: calc(100vh - 60px);
  font-size: 1.2em;  // 글자 크기 설정 (원하는 대로 조절 가능)
`;
