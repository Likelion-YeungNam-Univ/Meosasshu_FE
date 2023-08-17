import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ListenPopUp = ({ onClose }) => {
    const [transcript, setTranscript] = useState(""); 
    let recognition;

    const navigate = useNavigate();

    useEffect(() => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new window.SpeechRecognition();
        recognition.interimResults = true; 
        recognition.lang = 'ko-KR'; 

        recognition.addEventListener('result', (e) => {
            const last = e.results.length - 1;
            const text = e.results[last][0].transcript;
            setTranscript(text);
            console.log(text);
        });

        recognition.start();

        // 5초 후에 팝업 닫기
        const timeoutId = setTimeout(handleClose, 5000);

        return () => {
            recognition.stop();
            clearTimeout(timeoutId); // Cleanup the timeout if the component is unmounted
        };
    }, []);

    const handleBoxClick = (e) => {
        e.stopPropagation(); 
    };

    const handleClose = () => {
        recognition && recognition.stop(); 
        onClose();
        
        navigate('/productlist', { state: { transcript } });
    };

    return (
        <Container onClick={handleClose}>
            <Box onClick={handleBoxClick}>
                <CloseButton onClick={handleClose}></CloseButton>
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
    width: 160px;
    height: 58px;
    background-color: white;
    border-radius: 50px;
    border: 1px solid #000;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 100px; 
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