import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListenPopUp = ({ onClose }) => {
    const [transcript, setTranscript] = useState(""); // 인식된 음성 텍스트를 저장
    let recognition;

    // SpeechRecognition 객체 초기화
    useEffect(() => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new window.SpeechRecognition();
        recognition.interimResults = true; // 중간 결과도 반환받음
        recognition.lang = 'ko-KR'; // 언어 설정

        recognition.addEventListener('result', (e) => {
            const last = e.results.length - 1;
            const text = e.results[last][0].transcript;
            setTranscript(text);
            console.log(text);
        });

        recognition.start(); // 음성인식 시작

        return () => {
            recognition.stop(); // 컴포넌트 언마운트 시 음성인식 중지
        };
    }, []);

    const handleBoxClick = (e) => {
        e.stopPropagation(); // 팝업 내부 클릭시 이벤트 버블링 방지
    };

    const handleClose = () => {
        recognition && recognition.stop(); // 음성인식 중지
        onClose();
    };

    return (
        <Container onClick={handleClose}>
            <Box onClick={handleBoxClick}>
                <CloseButton onClick={handleClose}>X</CloseButton>
                듣고있어요
            </Box>
        </Container>
    );
}


export default ListenPopUp;

const Container = styled.div`
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1000; // z-index 추가
`;

const Box = styled.div`
    padding: 20px 40px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    position: absolute;
    right: 10px;
    top: 10px;
`;