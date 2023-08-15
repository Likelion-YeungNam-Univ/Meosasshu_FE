import React, { useState } from 'react';
import styled from 'styled-components';
import UserIcon from "../assets/idicon.png"; 
import PasswordIcon  from "../assets/pwicon.png"; 
import Logo from "../assets/logo2.png";
import Nav from '../components/Nav';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  // const [accessToken, setAccessToken] = useState('');
  // const [refreshToken, setRefreshToken] = useState('');

  const apiUrl = 'https://6c00-141-164-59-170.ngrok-free.app'; 
  // Axios 인스턴스 생성
  const api = axios.create({
    timeout: 10000, // 타임아웃 설정
  });

  const handleLogin = () => {
    api.post(apiUrl + '/api/v1/auth/login', {
      password: pw,
      email: email
    }).then((response) => {
      // const responseData = response.data;
      // setAccessToken(responseData.accessToken);
      // setRefreshToken(responseData.refreshToken);
      alert('로그인 성공');
    }).catch((error) => {
      alert('로그인 실패');
    });
  };
return(
    <section>
      <LoginPageContainer>
        <LoginForm>
          <Nav/>
          <LogoIconContainer>
            <Icon src={Logo} alt="로고 아이콘" />
          </LogoIconContainer>
            <InputBox>
                <div>
                    <Inputld
                     type='email'
                     id="email"
                     placeholder="아이디"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required //아무것도 입력되지 않았을 때, 입력하라는 문구
                    />
                </div>
               
                <div>
                 <InputPw
                    type='password'
                    id="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    required //아무것도 입력되지 않았을 때, 입력하라는 문구
                 />
                </div>
            </InputBox>

            <div>
              <SubmitButton onClick={handleLogin}>
                 로그인
              </SubmitButton>
            </div>
            <p>
                <SignUpButton
                 href='/SignUp'>
                 회원가입
                 </SignUpButton>
            </p>
        </LoginForm>
    </LoginPageContainer>
</section>
)
}


export default Login;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const LoginForm = styled.form`
  padding: 20px;
  width: 365px; /* 폼의 너비를 더 넓게 조절 */
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SharedStyles = `
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #000;
  border: none;
  outline: 0;
  -webkit-appearance: none;
  background-color: transparent;
  padding: 8px;
  box-sizing: border-box;
`;

const LogoIconContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
  margin-top: 20px;
`;


const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Inputld = styled.input`
    ${SharedStyles}
    border-bottom: 2px solid #D8D8D8;
    padding-left: 25px;
    background: url(${UserIcon}) no-repeat 8px center;
    background-size: 9px;
    &::placeholder {
      color: #D8D8D8;
    }
    width: 100%; 
`;

const InputPw = styled.input`
  ${SharedStyles}
  padding-left: 25px;
  background: url(${PasswordIcon}) no-repeat 4px center;
  background-size: 16px;
  &::placeholder {
    color: #D8D8D8;
  }
  width: 100%; 
`;

const InputBox = styled.div`
  margin: 35px 0 5px;
  border: 2px solid #D8D8D8;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
`;


const SubmitButton = styled.button`
  background-color: #BCC454;
  margin-top: 15px; /* 마진 조절 */
  color: white;
  width: 100%; /* 로그인 버튼의 길이를 100%로 설정 */
  padding: 10px 20px; /* 패딩 조절 */
  font-size: 16px;
  border: 2px solid #BCC454;
  border-radius: 5px;
  cursor: pointer;
`;
const SignUpButton = styled.a`
  color:#BCC454;
  text-decoration-line: none;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-size:13px;
  margin-bottom:100%;
`;