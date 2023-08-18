import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import priceicon from "../assets/가성비 아이콘.png";
import deliveryicon from "../assets/배송 아이콘.png";
import qualityicon from "../assets/품질 아이콘.png";

const Url2 = 'http://118.67.134.65:8080';

const Review = () => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [productInfo, setProductInfo] = useState(null);

    const keywordMap = {
        '가성비': '가성비가 좋아요.',
        '품질': '품질이 우수해요.',
        '배송': '배송이 빨라요.'
    };

    const iconMap = {
        '가성비': priceicon,
        '품질': qualityicon,
        '배송': deliveryicon
    };

    const toggleKeyword = (keyword) => {
        if (selectedKeywords.includes(keyword)) {
            setSelectedKeywords(prev => prev.filter(k => k !== keyword));
        } else {
            setSelectedKeywords(prev => [...prev, keyword]);
        }
    };

    const submitReview = async () => {
        try {
            const mappedKeywords = selectedKeywords.map(keyword => keywordMap[keyword]);

            const body = {
                comment: reviewText,
                keywords: mappedKeywords
            };

            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            const response = await axios.post(`${Url2}/api/v1/products/${productId}/reviews`, body, {
                headers: {
                    "accessToken": accessToken,
                    "refreshToken": refreshToken
                }
            });

            console.log(response.data); 

        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    const location = useLocation();
    const productId = location.state.productId;
    const orderId = location.state.orderId;

    useEffect(() => {
        const fetchProductInfo = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');

                const response = await axios.get(`${Url2}/api/v1/orders/${orderId}/products/${productId}/review-form`, {
                    headers: {
                        'ngrok-skip-browser-warning': '69420',
                        "withCredential": "true",
                        "Content-Type": "application/json",
                        "accessToken": accessToken,
                        "refreshToken": refreshToken
                    }
                });

                setProductInfo(response.data);

            } catch (error) {
                console.error("Error fetching product info:", error);
            }
        };

        fetchProductInfo();
    }, [orderId, productId]);

    return (
        <ReviewBox>
            <Nav backTo='/orderinquiry'>리뷰</Nav>
            {productInfo && (
                <div>
                    <h3>{productInfo.productName}</h3>
                </div>
            )}

            <MainQuestion>어떤 점을 추천하나요? (1-3개)</MainQuestion>
            <SubQuestion>이 제품에 맞는 키워드를 골라주세요.</SubQuestion>

            <Label>가격/품질</Label>
            <KeywordContainer>
                <KeywordBox 
                    selected={selectedKeywords.includes('가성비')}
                    onClick={() => toggleKeyword('가성비')}
                >
                    <KeywordIcon src={iconMap['가성비']} />
                    <KeywordLabel selected={selectedKeywords.includes('가성비')}>
                        가성비가 좋아요.
                    </KeywordLabel>
                </KeywordBox>
                <KeywordBox 
                    selected={selectedKeywords.includes('품질')}
                    onClick={() => toggleKeyword('품질')}
                >
                    <KeywordIcon src={iconMap['품질']} />
                    <KeywordLabel selected={selectedKeywords.includes('품질')}>
                        품질이 우수해요.
                    </KeywordLabel>
                </KeywordBox>
            </KeywordContainer>

            <Label>배송</Label>
            <KeywordContainer>
                <KeywordBox 
                    selected={selectedKeywords.includes('배송')}
                    onClick={() => toggleKeyword('배송')}
                >
                    <KeywordIcon src={iconMap['배송']} />
                    <KeywordLabel selected={selectedKeywords.includes('배송')}>
                        배송이 빨라요.
                    </KeywordLabel>
                </KeywordBox>
            </KeywordContainer>

            <Line />
            <ReviewContainer>
                <ReviewTitle>리뷰를 작성해주세요.</ReviewTitle>
                <ReviewInput 
                    placeholder="리뷰 작성하기" 
                    value={reviewText} 
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <SubmitButton 
                    type="button" 
                    disabled={reviewText.length < 10}
                    onClick={submitReview}
                >
                    등록하기
                </SubmitButton>
            </ReviewContainer>
        </ReviewBox>
    );
};

export default Review;

const ReviewBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;
const Container = styled.div`
    font-family: Arial, sans-serif;
    padding: 2vh;
    background-color: #ffffff;
    min-height: 100vh;
`;

const MainQuestion = styled.p`
    font-weight: bold;
    font-size: 20px;  
    text-align: center;  
    margin-bottom: 0.5vh;
`;

const SubQuestion = styled.p`
    font-weight: normal;
    font-size:15px;
    color: #888;
    text-align: center;
    margin-top: 0.5vh;
`;

const Label = styled.p`
    font-weight: bold;
    margin-top: 2vh;
`;

const KeywordContainer = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    gap: 0.5vw;
    margin-bottom: 1vh;
`;

const KeywordBox = styled.div`
    display: flex;
    font-size:17px;
    font-weight: 600;
    width: 200px;
    height: 50px;
    align-items: center;
    padding: 0.5vh 1vw;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: ${props => props.selected ? "#BCC454" : "#ffffff"};

    &:hover {
        background-color: ${props => props.selected ? "#BCC454" : "#f0f1f5"};
    }
`;

const KeywordIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 29px;
`;

const KeywordLabel = styled.span`
    color: ${props => props.selected ? "#ffffff" : "#000"};
    transition: color 0.3s;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #f0f1f5;
    margin: 2vh 0;
`;

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    align-items: center;
`;

const ReviewTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1vh;
   
`;

const ReviewInput = styled.textarea`
    width: 350px;
    height: 100px;
    padding: 1vh;
    background-color: #F0F1F5;
    border: none;
    border-radius: 1vh;
    resize: vertical;
    color: #929294;
    font-size: 16px;
    font-weight: 500;
`;

const SubmitButton = styled.button`
    width: 150px;
    height: 50px;
    padding: 1vh 2vw;
    background-color: ${props => props.disabled ? '#929294' : '#BCC454'};
    color: white;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 1vh;
    cursor: pointer;
    transition: background-color 0.3s;
    align-self: flex-end;
    &:hover {
        background-color: ${props => props.disabled ? '#929294' : '#BCC454'};
    }
`;