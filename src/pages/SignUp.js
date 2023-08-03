import React, { useState, useEffect } from "react";
import Postcode from "../components/Postcode";

const SignUp = () => {

    const [email,setEmail]=useState("");
    const [pw,setPw]=useState("");
    const [confirmPw,setConfirmPw]=useState("");
    const [confirmPwMsg,setConfirmPwMsg] = useState('')
    const [name,setName]=useState("");
    const [year,setYear]=useState("");
    const [month,setMonth]=useState("");
    const [day,setDay]=useState("");
    const [sex, setSex]=useState("")
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

    const sexOption = [
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
        <h1>로고</h1>
        <form>
            <div>
                <div>아이디</div>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}>
                </input>
            </div>
            <div>
                <div>비밀번호</div>
                <input 
                    type="password"
                    value={pw}
                    onChange={(e)=>{setPw(e.target.value)}}>
                </input>
            </div>
            <div>
                <div>비밀번호 재확인</div>   
                <input 
                    type="password"
                    value={confirmPw}
                    onChange={(e)=>{setConfirmPw(e.target.value)}}>
                </input>
                <p>{confirmPwMsg}</p>
            </div>
            <div>
                <div>이름</div>
                <input 
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}>
                </input>
            </div>
            <div>
                <div>생년월일</div>
                <input 
                    type="text" 
                    placeholder="년(4자)"
                    value={year}
                    onChange={(e)=>{setYear(e.target.value)}}>
                </input>
                <select onChange={(e)=>{setMonth(e.currentTarget.value)}} value={month}>
                    <option>월</option>
                    {monthOptions.map((item) => (<option key={item.key} value={item.value}>{item.value}</option>))}
                </select>
                <input 
                    type="text" 
                    placeholder="일"
                    value={day}
                    onChange={(e)=>{setDay(e.target.value)}}>
                </input>
            </div>
            <div>
                <div>성별</div>
                <select onChange={(e)=>{setSex(e.currentTarget.value)}} value={sex}>
                    <option>성별</option>
                    {sexOption.map((item) => (<option key={item.key} value={item.value}>{item.value}</option>))}
                </select>
            </div>
            <div>
                <div>전화번호</div>
                <input 
                    type="tel" 
                    value={tel}
                    placeholder="전화번호 입력" 
                    onChange={(e)=>{setTel(e.target.value)}}>
                </input>
                <input type="submit" value={"인증번호받기"}></input>
                <br/><input 
                        type="text" 
                        value={authenticationCode}
                        placeholder="인증번호 입력"
                        onChange={(e)=>{SetAuthenticationCode(e.target.value)}}>
                    </input>
            </div>
            <Postcode/><br/>
            <input type="submit" value={"가입하기"}></input>
        </form>
        </>
    )
}
export default SignUp