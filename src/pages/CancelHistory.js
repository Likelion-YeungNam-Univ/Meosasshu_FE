import React from "react";
import styled from "styled-components";  // 스타일링을 위해 추가
import Nav from "../components/Nav";

const CancelHistory = () => {
    return(
        <>
            <Nav backTo="/profile">취소/교환/환불 내역</Nav>
            <CenteredText>취소/교환/환불 내역이 없습니다.</CenteredText>
        </>
    )
}

export default CancelHistory;


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
