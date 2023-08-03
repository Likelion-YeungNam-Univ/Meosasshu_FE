import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const Postcode = () => {
  const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

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

    console.log(fullAddress); //'서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data);
    console.log(data.zonecode); //우편번호

  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <form>
    <div>
        <div>주소등록</div>
        <input type="text" placeholder="받는 분"></input><br/>
        <input placeholder="우편번호"></input>
        <button type='button' onClick={handleClick}>주소찾기</button><br/>
        <input placeholder="주소"></input><br/>
        <input type="text" placeholder="상세주소"></input>
    </div>
</form>
  );
};

export default Postcode;