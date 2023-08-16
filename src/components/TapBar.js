import React, { useState } from 'react';
import styled from 'styled-components';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import Mic from '../assets/clickMic.png';
import ListenPopUp from '../pages/ListenPopUp.js';

const TapBar = () => {
    const [clickMic, setClickMic] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false);

    const handleMic = () => {
        setClickMic(!clickMic);
        setShowPopUp(true);
    };

    return (
        <>
            <TapBarBox>
                <div style={{textAlign:'center', marginBottom:'10px'}}>
                    <TapBarMenuLink to='/category'>
                        <DensityMediumOutlinedIcon fontSize='large' sx={{marginTop:'10px'}}/>
                        <TapBarMenuName>카테고리</TapBarMenuName>
                    </TapBarMenuLink>
                </div>
                <div style={{textAlign:'center'}}>
                    <TapBarMenuLink to='/profile'>
                        <AccountCircleOutlinedIcon fontSize='large' sx={{marginTop:'10px'}}/>
                        <TapBarMenuName>내 정보</TapBarMenuName>
                    </TapBarMenuLink>
                </div>
                <div style={{textAlign:'center'}}>
                    <TapBarMenuLink to='/'>
                        <HomeIcon fontSize='large' sx={{marginTop:'10px'}}/>
                        <TapBarMenuName>메인 화면</TapBarMenuName>
                    </TapBarMenuLink>
                </div>
                <div style={{textAlign:'center'}}>
                    <TapBarMenuLink to='#' onClick={handleMic}>
                        {clickMic ? 
                            <MicIcon fontSize='large' sx={{color:'#BCC454', marginTop:'10px'}} />
                            : <MicImg src={Mic} alt="mic" />}
                        <TapBarMenuName style={{color:'#BCC454'}}>음성 검색</TapBarMenuName>
                    </TapBarMenuLink>
                </div>
                <div style={{textAlign:'center'}}>
                    <TapBarMenuLink to='/cart'>
                        <AddShoppingCartIcon fontSize='large' sx={{marginTop:'10px'}}/>
                        <TapBarMenuName>장바구니</TapBarMenuName>
                    </TapBarMenuLink>
                </div>
            </TapBarBox>

            {showPopUp && <ListenPopUp onClose={() => setShowPopUp(false)} />}
        </>
    );
}

const TapBarBox = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #FFF;

    @media only screen and (min-width: 430px) {
        max-width:365px;
        margin: auto;
    }

    @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
    }
`;

const TapBarMenuName = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
`;

const TapBarMenuLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;

const MicImg = styled.img`
    width: 35px;
    height: 35px;
    margin-top: 10px;
`;

export default TapBar;
