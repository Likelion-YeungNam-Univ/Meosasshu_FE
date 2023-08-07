import React, { useState } from 'react';
import styled from 'styled-components';
import UserIcon from "../assets/idicon.png"; 
import PasswordIcon  from "../assets/pwicon.png"; 
import Logo from "../assets/logo2.jpg";
import Nav from '../components/Nav';


const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  
  const [idValid, setIdValid] = useState(false);

  const handleId = (e) => {
    setId(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };


  return(
    <setion>
      <LoginPageContainer>
        <LoginForm>
          <Nav/>
          <LogoIconContainer>
            <Icon src={Logo} alt="로고 아이콘" />
          </LogoIconContainer>
            <InputBox>
                <div>
                    <Inputld
                     type='id'
                     id="id"
                     placeholder="아이디"
                     value={id}
                     onChange={handleId} 
                     required //아무것도 입력되지 않았을 때, 입력하라는 문구
                    />
                </div>
                <div>
                    {!idValid && id.length > 0 && (<div>올바른 이메일을 입력해주세요.</div>)}
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
                <SubmitButton>
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
</setion>
)
}


export default Login;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

const LoginForm = styled.form`
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;

  @media (max-width: 768px) {
    width: 80%;
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
    padding-left: 25px; /* 아이콘 공간을 만들기 위한 간격 설정 */
    background: url(${UserIcon}) no-repeat 8px center; /* 아이콘을 배경 이미지로 설정 */
    background-size: 9px; /* 아이콘 크기 설정 */
    &::placeholder{
      color: #D8D8D8;
`;

const InputPw = styled.input`
  ${SharedStyles}
  padding-left: 25px;
  background: url(${PasswordIcon}) no-repeat 4px center;
  background-size: 16px;
  &::placeholder{
    color: #D8D8D8;
`;

const InputBox = styled.div`
  margin: 35px 0 5px;
  border: 2px solid #D8D8D8;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
`;


const SubmitButton = styled.button`
  background-color: #FF607F;
  margin-top:5px;
  color:white;
  width: 100%;
  padding: 8px 20px;
  font-size: 16px;
  border: 1px solid ;
  border-radius:5px ;
  cursor: pointer;
  border: 2px solid #FF607F;
`;

const SignUpButton = styled.a`
  color:#FF607F;
  text-decoration-line: none;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-size:5px;
  margin-bottom:100%;
`;
