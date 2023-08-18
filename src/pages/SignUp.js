import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'
import logoPath from '../assets/logo2.png';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const SignUp = () => {
    const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

    const [zonecode,setZonecode]=useState("")
    const [address,setAddress]=useState("")
  
    const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';
  
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
  
      setZonecode(data.zonecode);
      setAddress(fullAddress);
   
      //console.log(data); 
  
    };
    const handleClick = () => {
      open({ onComplete: handleComplete });
    };
    
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

    const monthOptions = [
        {key:1, value: "01", type:"1월"},
        {key:2, value: "02", type:"2월"},
        {key:3, value: "03", type:"3월"},
        {key:4, value: "04", type:"4월"},
        {key:5, value: "05", type:"5월"},
        {key:6, value: "06", type:"6월"},
        {key:7, value: "07", type:"7월"},
        {key:8, value: "08", type:"8월"},
        {key:9, value: "09", type:"9월"},
        {key:10, value: "10", type:"10월"},
        {key:11, value: "11", type:"11월"},
        {key:12, value: "12", type:"12월"},
    ]

    const genderOption = [
        {key:2, value:"f", type: "남자"},
        {key:1, value:"m", type: "여자"},
    ]

    useEffect(() => {
        if(pw !== confirmPw){
            setConfirmPwMsg('비밀번호가 일치하지 않습니다.')
        }
        else {
            setConfirmPwMsg('')
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pw, confirmPw]   
)


const birthday = `${year}-${month}-${day}`;


const apiUrl = 'http://118.67.134.65:8080';

const onSubmit = () => {
    axios
    .post(apiUrl + '/api/v1/auth/register', {
        email: email,
        password: pw,
        name: name,
        mobileNumber: tel,
        birthDate: birthday,
        gender: gender,
        city: address,
        street: ' ',
        zipcode: zonecode,
    },{})
    .then((response) => {
        console.log(response);
        alert("회원가입이 완료되었습니다.")
      })
};


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
                        {monthOptions.map((item) => (<option key={item.key} value={item.value}>{item.type}</option>))}
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
                        {genderOption.map((item) => (<option key={item.key} value={item.value}>{item.type}</option>))}
                    </GenderOption>
                </div>
                <div>
                    <FormList>전화번호</FormList>
                    <InputBox
                        type="tel" 
                        value={tel}
                        placeholder="전화번호 입력" 
                        onChange={(e)=>{setTel(e.target.value)}}>
                    </InputBox>
                </div>
                <div>
                    <FormList>배송지 등록</FormList>
                    <InputBox type="text" placeholder="받는 분"></InputBox><br/>
                    <InputZonecode placeholder="우편번호" defaultValue={zonecode}></InputZonecode>
                    <SearchAddBtn type='button' onClick={handleClick}>주소찾기</SearchAddBtn><br/>
                    <InputBox placeholder="주소" defaultValue={address}></InputBox><br/>
                    <InputBox type="text" placeholder="상세주소"></InputBox>
                </div>
                <SignUpBtn type="submit" value={"가입하기"} onClick={onSubmit}></SignUpBtn>
            </form>
        </SignUpForm>
        </>
    )
}
export default SignUp;

const FormList = styled.div`
font-size: 2vh;
font-weight: bold;
`;
const SignUpForm = styled.div`
width:365px;
display: flex;
align-items: center;
margin: auto;

@media only screen and (max-width: 430px) {
    width:84vw;
}
`;
const InputBox = styled.input`
width: 350px ;
height: 40px;
border: 2px solid #DEDEDE;
margin-top: 3px;
margin-bottom: 8px;

@media only screen and (max-width: 430px) {
    width: 81vw;
    height: 5vh;
}
`;
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
}
`;
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
}
`;
const SignUpBtn= styled.input`
width: 355px ;
height: 45px;
background-color: #BCC454;
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
display: block;
margin: auto;
margin-top:20px;
`;
const ConfirmPwMsg= styled.p`
color: #EB0000;
margin-top: 0px;
margin-bottom: 10px;
font-size: 2.3vh
`;


const InputZonecode = styled.input`
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
const SearchAddBtn= styled.button`
width: 69px ;
height: 45px;
font-size: 10px;
background-color: #BCC454;
border: none;
color: white;
font-size: 1.7vh;

@media only screen and (max-width: 430px) {
    width: 20vw;
    height: 5.5vh;
    padding:0vh;
    font-size: 1.5vh;
}`;