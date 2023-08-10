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
    <div>
      <SearchContainer>
        <input
          type="text"
          placeholder=" 찾으시는 물건이 무엇인가요?"
        />
        <IconContainer>
          <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
          <MicIcon onClick={handleMicClick} style={{ cursor: 'pointer' }} />
        </IconContainer>
      </SearchContainer>
    </div>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 20px;
  margin-left: 10px;

  input {
    width: 270px;
    height: 35px;
    border-radius: 20px;
    background-color: #F0F1F5;
    border: none; /* 테두리 없애기 */
    padding: 0 10px; /* 내용과의 간격을 위해 padding 추가 */
    padding-right: 35px; /* 돋보기 아이콘을 위한 오른쪽 패딩 추가 */
  }
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10px; /* 아이콘 컨테이너를 오른쪽에 위치 */
  align-items: center;
  height: 100%; /* 아이콘 컨테이너의 높이를 input에 맞게 조정 */
`;



export default Search;
