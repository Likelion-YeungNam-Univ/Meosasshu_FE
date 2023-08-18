import React from "react";
import Search from "../components/Search";
import MainTop from "../components/main/MainTop";
import ProductRanking from "../components/main/ProductRanking";
import TapBar from "../components/TapBar";
import "../assets/font/style.css"
import styled from "styled-components";

const Main = () => {
  return (
    <MainBox>
    <MainContainer>
    <Search />
    <MainTop />
    <ProductRanking />
    <TapBar />
    </MainContainer>
    </MainBox>
  );
};

export default Main;

const MainBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const MainContainer= styled.div`
padding: 0px;
width: 365px; 

@media (max-width: 430px) {
  width: 100%;
}
`;
