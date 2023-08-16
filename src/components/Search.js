import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import styled from 'styled-components';

const Search = () => {
  const [micActive, setMicActive] = useState(false);
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    //브라우저가 마이크를 허용하지 않은 경우
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleSearch = () => {
    console.log('검색 아이콘이 클릭되었습니다!');
  };

  const handleMicClick = () => {
    if (!micActive) {
      console.log('마이크 아이콘이 클릭되었습니다! 음성 인식 시작.');
      SpeechRecognition.startListening({ continuous: true, language: 'ko' });
    } else {
      console.log('마이크 아이콘이 클릭되었습니다! 음성 인식 중지.');
      SpeechRecognition.stopListening();
      console.log(transcript);
      resetTranscript();
    }
    setMicActive(!micActive);
  };

  return (
        <div style={{display:'flex',marginTop:'20px', alignItems:'center'}}>
          <label style={{position:'relative'}}>
            <SearchBar
              type="text"
              placeholder=" 찾으시는 물건이 무엇인가요?"/>
            <SearchBtn><SearchIcon onClick={handleSearch} style={{ cursor: 'pointer',color:'#929294'}} /></SearchBtn>
          </label>
          <MicIcon onClick={handleMicClick} style={{ cursor: 'pointer'}} />
        </div>
  );
};

const SearchBar =styled.input`
margin:auto; 
width:270px;
height:35px;
border:none;
background:#F0F1F5;
border-radius:2em;
padding-left:10px;
padding-right:30px;
`;

const SearchBtn =styled.button`
position:absolute; 
left:275px;
top: 3px;
border:none; 
background: transparent;
`;

export default Search;