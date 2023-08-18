import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderBox = styled.div`
display: flex;
justify-content: space-between;
width:365px;
margin: auto;
margin-top: 20px;
margin-bottom: 20px;

@media only screen and (max-width: 430px) {
    max-width: auto;
}`;

const Header = (props) => {
    return(
        <>
        <HeaderBox>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                <path d="M1.97363 2H26.9736" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M1.97363 14H26.9736" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M1.97363 26H26.9736" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>

            <span style={{marginLeft:'40px', fontSize:'20px', fontWeight:'600'}}>{props.children}</span>
            
            <div>
                <svg style={{marginRight:'10px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path d="M13.125 2.9165C7.50437 2.9165 2.91667 7.5042 2.91667 13.1248C2.91667 18.7455 7.50437 23.3332 13.125 23.3332C15.6742 23.3332 18.0031 22.3824 19.7957 20.8267L20.4167 21.4476V23.3332L29.1667 32.0832L32.0833 29.1665L23.3333 20.4165H21.4478L20.8268 19.7956C22.3825 18.003 23.3333 15.674 23.3333 13.1248C23.3333 7.5042 18.7456 2.9165 13.125 2.9165ZM13.125 5.83317C17.1693 5.83317 20.4167 9.08049 20.4167 13.1248C20.4167 17.1692 17.1693 20.4165 13.125 20.4165C9.08065 20.4165 5.83333 17.1692 5.83333 13.1248C5.83333 9.08049 9.08065 5.83317 13.125 5.83317Z" fill="black"/>
                </svg>
                <Link to="/cart">
                <svg style={{marginBottom:'3px'}} xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                    <path d="M14.2857 11.4286H17.1429V7.14286H21.4286V4.28571H17.1429V0H14.2857V4.28571H10V7.14286H14.2857V11.4286ZM8.57143 24.2857C7 24.2857 5.72857 25.5714 5.72857 27.1429C5.72857 28.7143 7 30 8.57143 30C10.1429 30 11.4286 28.7143 11.4286 27.1429C11.4286 25.5714 10.1429 24.2857 8.57143 24.2857ZM22.8571 24.2857C21.2857 24.2857 20.0143 25.5714 20.0143 27.1429C20.0143 28.7143 21.2857 30 22.8571 30C24.4286 30 25.7143 28.7143 25.7143 27.1429C25.7143 25.5714 24.4286 24.2857 22.8571 24.2857ZM10.1429 17.1429H20.7857C21.8571 17.1429 22.8 16.5571 23.2857 15.6714L28.8 5.65714L26.3143 4.28571L20.7857 14.2857H10.7571L4.67143 1.42857H0V4.28571H2.85714L8 15.1286L3.74286 22.8571H25.7143V20H8.57143L10.1429 17.1429Z" fill="black"/>
                </svg>
                </Link>
            </div>
        </HeaderBox>
        </>
    )
}

export default Header;