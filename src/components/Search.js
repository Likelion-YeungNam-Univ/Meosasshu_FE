import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextField from '@mui/material/TextField';
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
      console.log(transcript)
      resetTranscript(); 
    }
    setMicActive(!micActive);
  };

  return (
    <div>
      <WideTextField
        placeholder=" 찾으시는 물건이 무엇인가요?"
        variant="outlined"
        InputProps={{
          startAdornment: <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />,
          endAdornment: <MicIcon onClick={handleMicClick} style={{ cursor: 'pointer' }} />,
        }}
      />
    </div>
  );
};

const WideTextField = styled(TextField)`
  width:100%; /* Set the desired width here */
  margin-left:10px;
  display: flex;
`;

export default Search;
