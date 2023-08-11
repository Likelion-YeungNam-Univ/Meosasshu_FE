import React from 'react';
import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components'

const FormListAddress = styled.div`
font-size: 2vh;
font-weight: bold;
`;

const InputBox = styled.input`
width: 350px ;
height: 40px;
border: 2px solid #DEDEDE;
margin-top: 3px;

@media only screen and (max-width: 430px) {
    width: 81vw;
    height: 5vh;
}`;

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

const Postcode = () => {
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

    console.log(fullAddress); //'서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data.zonecode); //우편번호
    console.log(data); 

  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
        <div>
            <FormListAddress>배송지 등록</FormListAddress>
            <InputBox type="text" placeholder="받는 분"></InputBox><br/>
            <InputZonecode placeholder="우편번호" defaultValue={zonecode}></InputZonecode>
            <SearchAddBtn type='button' onClick={handleClick}>주소찾기</SearchAddBtn><br/>
            <InputBox placeholder="주소" defaultValue={address}></InputBox><br/>
            <InputBox type="text" placeholder="상세주소"></InputBox>
        </div>
  );
};

export default Postcode;