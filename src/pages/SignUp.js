import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Postcode from "../components/Postcode";
import logoPath from '../assets/logo2.png';

const FormList = styled.div`
font-size: 2vh;
font-weight: bold;
`;
const SignUpForm = styled.div`
//background-color: lightblue;
width:365px;
display: flex;
align-items: center;
margin: auto;

@media only screen and (max-width: 430px) {
    //background-color: pink;
    width:84vw;
}`;
const InputBox = styled.input`
width: 350px ;
height: 40px;
border: 2px solid #DEDEDE;
margin-top: 3px;
margin-bottom: 8px;

@media only screen and (max-width: 430px) {
    width: 81vw;
    height: 5vh;
}`;
const InputTel = styled.input`
width: 277px ;
height: 40px;
border: 2px solid #DEDEDE;
margin-top: 3px;
margin-botton: 4px;
margin-right: 4px;

@media only screen and (max-width: 430px) {
    width: 59.5vw;
    height: 5vh;
}`;
const InputYearDay = styled.input`
width: 112px ;
height: 40px;
border: 2px solid #DEDEDE;
margin-right: 4px;
margin-top: 3px;
margin-bottom: 8px;

&::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
    }
&::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
    }

@media only screen and (max-width: 430px) {
    width: 25vw;
    height: 5vh;
}`;
const MonthOption = styled.select`
width: 112px ;
height: 44px;
border: 2px solid #DEDEDE;
margin-right: 4px;
margin-top: 3px;
margin-bottom: 8px;

@media only screen and (max-width: 430px) {
    width: 26vw;
    height: 5.5vh;
}`;
const GenderOption = styled.select`
width: 360px ;
height: 45px;
border: 2px solid #DEDEDE;
margin-top: 3px;
margin-bottom: 8px;

@media only screen and (max-width: 430px) {
    width: 82vw;
    height: 5.5vh;
}`;
const AuthenticationCodeBtn= styled.input`
width: 69px ;
height: 45px;
font-size: 10px;
background-color: #FF607F;
border: none;
color: white;


@media only screen and (max-width: 430px) {
    width: 20vw;
    height: 5.5vh;
    padding:0vh;
    font-size: 1.5vh;
}`;

const SignUpBtn= styled.input`
width: 355px ;
height: 45px;
background-color: #FF607F;
border: none;
color: white;
font-weight: bold;
font-size: 15px;
margin-bottom: 20px;

@media only screen and (max-width: 430px) {
    width: 83vw;
    height: 6vh;
}`;

const Logo= styled.img`
margin-top:20px;

@media only screen and (max-width: 430px) {
    width: 83vw;
    height: 8vh;
}
`;

const ConfirmPwMsg= styled.p`
color: #EB0000;
margin-top: 0px;
margin-bottom: 10px;
font-size: 2.3vh`


const SignUp = () => {

    const [email,setEmail]=useState("");
    const [pw,setPw]=useState("");
    const [confirmPw,setConfirmPw]=useState("");
    const [confirmPwMsg,setConfirmPwMsg] = useState('')
    const [name,setName]=useState("");
    const [year,setYear]=useState("");
    const [month,setMonth]=useState("");
    const [day,setDay]=useState("");
    const [gender, setGender]=useState("")
    const [tel,setTel]=useState("")
    const [authenticationCode,SetAuthenticationCode]=useState("")

    const monthOptions = [
        {key:1, value:"1월"},
        {key:2, value:"2월"},
        {key:3, value:"3월"},
        {key:4, value:"4월"},
        {key:5, value:"5월"},
        {key:6, value:"6월"},
        {key:7, value:"7월"},
        {key:8, value:"8월"},
        {key:9, value:"9월"},
        {key:10, value:"10월"},
        {key:11, value:"11월"},
        {key:12, value:"12월"},
    ]

    const genderOption = [
        {key:1, value:"남자"},
        {key:2, value:"여자"},
    ]


    useEffect(() => {
          console.log("password : ", pw);
          console.log("confirmPasswordMsg : ", confirmPwMsg)
        if(pw !== confirmPw){
            setConfirmPwMsg('비밀번호가 일치하지 않습니다.')
        }
        else {
            setConfirmPwMsg('')
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pw, confirmPw]      
)

    return(
        <>
        <SignUpForm>
            <form>
                <Logo src={logoPath} alt="logo"></Logo>
                <div>
                    <FormList>아이디</FormList>
                    <InputBox 
                        type="email" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}>
                    </InputBox>
                </div>
                <div>
                    <FormList>비밀번호</FormList>
                    <InputBox 
                        type="password"
                        value={pw}
                        onChange={(e)=>{setPw(e.target.value)}}>
                    </InputBox>
                </div>
                <div>
                    <FormList>비밀번호 재확인</FormList>   
                    <InputBox 
                        type="password"
                        value={confirmPw}
                        onChange={(e)=>{setConfirmPw(e.target.value)}}>
                    </InputBox>
                    <ConfirmPwMsg>{confirmPwMsg}</ConfirmPwMsg>
                </div>
                <div>
                    <FormList>이름</FormList>
                    <InputBox 
                        type="text"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}>
                    </InputBox>
                </div>
                <div>
                    <FormList>생년월일</FormList>
                    <InputYearDay 
                        type="number" 
                        placeholder="년(4자)"
                        value={year}
                        onChange={(e)=>{setYear(e.target.value)}}>
                    </InputYearDay>
                    <MonthOption onChange={(e)=>{setMonth(e.currentTarget.value)}} value={month}>
                        <option>월</option>
                        {monthOptions.map((item) => (<option key={item.key} value={item.value}>{item.value}</option>))}
                    </MonthOption>
                    <InputYearDay
                        type="number" 
                        placeholder="일"
                        value={day}
                        onChange={(e)=>{setDay(e.target.value)}}>
                    </InputYearDay>
                </div>
                <div>
                    <FormList>성별</FormList>
                    <GenderOption onChange={(e)=>{setGender(e.currentTarget.value)}} value={gender}>
                        <option>성별</option>
                        {genderOption.map((item) => (<option key={item.key} value={item.value}>{item.value}</option>))}
                    </GenderOption>
                </div>
                <div>
                    <FormList>전화번호</FormList>
                    <InputTel
                        type="tel" 
                        value={tel}
                        placeholder="전화번호 입력" 
                        onChange={(e)=>{setTel(e.target.value)}}>
                    </InputTel>
                    <AuthenticationCodeBtn type="submit" value={"인증번호받기"}></AuthenticationCodeBtn>
                    <br/><InputBox
                            type="text" 
                            value={authenticationCode}
                            placeholder="인증번호 입력"
                            onChange={(e)=>{SetAuthenticationCode(e.target.value)}}>
                        </InputBox>
                </div>
                <Postcode/><br/>
                <SignUpBtn type="submit" value={"가입하기"}></SignUpBtn>
            </form>
        </SignUpForm>
        </>
    )
}
export default SignUp;