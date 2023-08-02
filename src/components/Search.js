import React,{useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
const [micActive, setMicActive] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleMicClick = () => {
    if (!micActive) {
        console.log('마이크 아이콘이 클릭되었습니다! 음성 인식 시작.');
        SpeechRecognition.startListening({ continuous: true, language: 'ko' });
      } else {
        console.log('마이크 아이콘이 클릭되었습니다! 음성 인식 중지.');
        SpeechRecognition.stopListening();
      }
      setMicActive(!micActive);
  };
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <TextField
        placeholder="검색어를 입력하세요"
        variant="outlined"
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: (
            <MicIcon onClick={handleMicClick} style={{ cursor: 'pointer' }} />
          ),
        }}
      />
    </div>
  );
};

export default Search;