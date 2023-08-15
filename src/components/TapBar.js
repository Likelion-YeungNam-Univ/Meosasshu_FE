import styled from 'styled-components'
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Mic from '../assets/clickMic.png';

const TapBar = () => {
    const [clickMic,setClickMic]=useState(true);

    const handleMic =  () => {
        setClickMic(!clickMic)
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
                 <TapBarMenuLink to=''> {/*음성페이지 추가 후에 연결 */}
                    {clickMic ? 
                            <MicIcon fontSize='large' sx={{color:'#BCC454', marginTop:'10px'}} onClick={handleMic}/>
                            : <MicImg src={Mic} alt="mic" onClick={handleMic} />}
                    
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
        </>
    )
}

export default TapBar;

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
}`;

const TapBarMenuName= styled.div`
font-size: 14px;
font-style: normal;
font-weight: 500;
`;

const TapBarMenuLink= styled(Link)`
color: #000;
text-decoration: none;
`;

const MicImg= styled.img`
width: 35px;
height: 35px;
margin-top: 10px;
`;