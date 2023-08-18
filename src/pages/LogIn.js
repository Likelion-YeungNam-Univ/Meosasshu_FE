import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserIcon from "../assets/idicon.png"; 
import PasswordIcon  from "../assets/pwicon.png"; 
import loginlogo from "../assets/loginlogo.png";
import Nav from '../components/Nav';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const apiUrl ='http://118.67.134.65:8080';
  const api = axios.create({
    timeout: 10000, 
  });

  const handleLogin = () => {
    api.post(apiUrl + '/api/v1/auth/login', {
      password: pw,
      email: email
    }).then((response) => {
      const { accessToken, refreshToken } = response.data; 
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      alert('로그인 성공');
      navigate('/main')
    }).catch((error) => {
      alert('로그인 실패');
    });
  };

  return(
   <LoginBox>
          <section>
      <LoginPageContainer>
        <LoginForm>
          <Nav/>
          <LogoIconContainer>
            <Icon src={loginlogo} alt="로고 아이콘" />
          </LogoIconContainer>
            <InputBox>
                <div>
                    <Inputld
                     type='email'
                     id="email"
                     placeholder="아이디"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                    />
                </div>
               
                <div>
                 <InputPw
                    type='password'
                    id="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    required 
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

   </LoginBox> 
)
}

export default Login;


const LoginBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;


const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  padding: 20px;
  width: 365px; 

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
  margin-top: 20px;
`;

const Icon = styled.img`
  width: 185px; /* 원하는 크기로 조절 */
  height: 70px; /* 원하는 크기로 조절 */

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
  margin-top: 15px; 
  color: white;
  width: 100%; 
  padding: 10px 20px; 
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
