import React from 'react';
import styled from 'styled-components';
import Clothes from '../../assets/Clothes.png'
import DoctorsBag from '../../assets/Doctors Bag.png'
import Therapy from '../../assets/Therapy.png'
import Caretaker from '../../assets/Caretaker.png'
import Nappy from '../../assets/Nappy.png'
import MainImg from '../../assets/image 3.png'
import { useNavigate } from "react-router-dom";

const MainTopContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const AdImage = styled.div`
    margin-top: 20px;
    img {
        max-width: 100%;
        height: auto;
    }
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
`;
const CategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CategoryText = styled.span`
    margin-top: 8px; // 원하는 간격으로 조절 가능
    font-size: 16px;
    font-weight: 500;
`;

const CategoryIcon = styled.img`
    width: 40px;
    height: auto;
`;

const MainTop = () => {
    const navigate= useNavigate();

    const handleNavigation = (categoryId) => {
        navigate('/categorydetail', {
            state: {id: categoryId }
        });
        console.log(categoryId)
    };
    return (
        <MainTopContainer>
            <AdImage>
                <img src={MainImg} alt="Advert" />
            </AdImage>
            <IconContainer>
                <CategoryItem onClick={() => handleNavigation(1)}>
                    <CategoryIcon src={Clothes} alt="Clothes" />
                    <CategoryText>의류</CategoryText>
                </CategoryItem>
                <CategoryItem onClick={() => handleNavigation(2)}>
                    <CategoryIcon src={DoctorsBag} alt="Doctors Bag" />
                    <CategoryText>건강식품</CategoryText>
                </CategoryItem>
                <CategoryItem onClick={() => handleNavigation(3)}>
                    <CategoryIcon src={Therapy} alt="Therapy" />
                    <CategoryText>의료용품</CategoryText>
                </CategoryItem>
                <CategoryItem onClick={() => handleNavigation(4)}>
                    <CategoryIcon src={Caretaker} alt="Caretaker" />
                    <CategoryText>생활용품</CategoryText>
                </CategoryItem>
                <CategoryItem onClick={() => handleNavigation(5)}>
                    <CategoryIcon src={Nappy} alt="Nappy" />
                    <CategoryText>기저귀</CategoryText>
                </CategoryItem>
            </IconContainer>
        </MainTopContainer>
    )
}

export default MainTop;
