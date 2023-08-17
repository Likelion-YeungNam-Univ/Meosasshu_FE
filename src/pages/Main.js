import React from "react";
import Search from "../components/Search";
import MainTop from "../components/main/MainTop";
import ProductRanking from "../components/main/ProductRanking";
import TapBar from "../components/TapBar";
import "../assets/font/style.css"

const Main = () => {
  return (
    <>
    <Search />
    <MainTop />
    <ProductRanking />
    <TapBar />
    </>
  );
};

export default Main;
