import React from 'react';
import styled from 'styled-components';

const ListenPopUp = ({ onClose }) => {
    return (
        <Container onClick={onClose}>
            <Box>
                <button onClick={onClose}>X</button>
                듣고있어요
            </Box>
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
`;

const Box = styled.div`
    padding: 20px 40px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default ListenPopUp;
