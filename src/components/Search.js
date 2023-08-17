import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ListenPopUp from '../pages/ListenPopUp';

const Search = () => {
  const navigate = useNavigate();
  const [showListenPopUp, setShowListenPopUp] = useState(false);
  const [searchValue, setSearchValue] = useState('');  // SearchBar의 value를 저장하기 위한 state
  
  const {
    transcript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleSearch = () => {
    console.log('검색 아이콘이 클릭되었습니다!');
    navigate('/productlist', { state:{ transcript: searchValue } });
  };

  const handleClosePopUp = () => {
    setShowListenPopUp(false);
  };

  const handleMicClick = () => {
    setShowListenPopUp(true);
  };

  return (
    <>
      <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
        <label style={{ position: 'relative' }}>
          <SearchBar
            type="text"
            value={searchValue}  // SearchBar의 value 설정
            onChange={e => setSearchValue(e.target.value)}  // 사용자 입력에 따라 searchValue 업데이트
            placeholder=" 찾으시는 물건이 무엇인가요?" 
          />
          <SearchBtn><SearchIcon onClick={handleSearch} style={{ cursor: 'pointer', color: '#929294' }} /></SearchBtn>
        </label>
        <MicIcon onClick={handleMicClick} style={{ cursor: 'pointer' }} />
      </div>

      {showListenPopUp && <ListenPopUp onClose={handleClosePopUp} />}
    </>
  );
};

export default Search;


const SearchBar =styled.input`
margin:auto;
margin-left:5px; 
width:300px;
height:35px;
border:none;
background:#F0F1F5;
border-radius:2em;
padding-left:10px;
padding-right:30px;
`;

const SearchBtn =styled.button`
position:absolute; 
left:295px;
top: 3px;
border:none; 
background: transparent;
`;
