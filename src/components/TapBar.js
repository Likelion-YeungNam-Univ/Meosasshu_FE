import styled from 'styled-components'
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const TapBarBox = styled.div`
position: fixed;
bottom: 0;
width: 100%;
display: flex;
justify-content: space-around;

@media only screen and (min-width: 430px) {
    max-width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const TapBar = () => {
    return (
        <>
        <TapBarBox>
            <DensityMediumOutlinedIcon/>
            <AccountCircleOutlinedIcon/>
            <HomeIcon/>
            <MicIcon/>
            <AddShoppingCartIcon/>
        </TapBarBox>
        </>
    )
}

export default TapBar;