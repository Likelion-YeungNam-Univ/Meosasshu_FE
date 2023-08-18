import styled from "@emotion/styled";
import Search from "../components/Search";
import TapBar from "../components/TapBar";
import Clothes from "../assets/Clothes.png";
import DoctorsBag from "../assets/Doctors Bag.png";
import  Therapy from "../assets/Therapy.png";
import Caretaker1 from "../assets/Caretaker1.png";
import Nappy from "../assets/Nappy.png";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Category = () => {
    const navigate= useNavigate();

    const handleNavigation = (categoryId) => {
        navigate('/categorydetail', {
            state: {id: categoryId }
        });
        console.log(categoryId)
    };

    return(
        <>
        <CategoryBox>
            <Search/>
            <hr style={{ border: 'solid 5px #FFF' }} />
            <div style={{background:'#F0F1F5', height:'100vh', paddingTop:'20px'}}>
                <CategoryBlock>
                        <CategoryItem  onClick={() => handleNavigation(1)}>
                            <img  src={Clothes} alt="의류"/>
                            <CategoryItemName>의류</CategoryItemName>
                        </CategoryItem>
                        <CategoryItem  onClick={() => handleNavigation(2)}>
                            <img  src={DoctorsBag} alt="건강식품"/>
                            <CategoryItemName>건강식품</CategoryItemName>
                        </CategoryItem>   
                </CategoryBlock>
                <CategoryBlock>
                        <CategoryItem  onClick={() => handleNavigation(3)}>
                            <img  src={Therapy} alt="의료용품"/>
                            <CategoryItemName>의료용품</CategoryItemName>
                        </CategoryItem>
                        <CategoryItem  onClick={() => handleNavigation(4)}>
                            <img  src={Caretaker1} alt="생활용품"/>
                            <CategoryItemName>생활용품</CategoryItemName>
                        </CategoryItem>
                </CategoryBlock>
                <CategoryItem style={{marginLeft:'12px'}}  onClick={() => handleNavigation(5)} >
                        <img  src={Nappy} alt="기저귀"/>
                        <CategoryItemName>기저귀</CategoryItemName>
                </CategoryItem>
            </div>
            <TapBar/>
        </CategoryBox>
        </>
    )
}

export default Category;

const CategoryBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
    high:100vh;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const CategoryBlock = styled.div`
display:flex;
justify-content: space-around;
`;

const CategoryItem = styled.div`
width:155px;
height:155px;
background:#BCC454;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 1em;
`;

const CategoryItemName = styled.div`
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
`;