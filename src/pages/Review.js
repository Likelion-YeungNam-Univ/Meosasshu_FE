import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Url2 = 'https://6503-158-247-236-58.ngrok-free.app';

const Review = () => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [productInfo, setProductInfo] = useState(null); // 상품 정보를 관리하는 state

    const keywordMap = {
        '가성비': '가성비가 좋아요.',
        '품질': '품질이 우수해요.',
        '배송': '배송이 빨라요.'
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

            console.log(response.data); // 콘솔로 결과 확인

        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    const location = useLocation();
    const productId = location.state.productId;
    const orderId = location.state.orderId;

    useEffect(() => {
        // 상품 정보를 가져오는 함수
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
        <Container>
            <Nav backTo='/orderinquiry'>리뷰</Nav>

            {productInfo && (  // 상품 정보가 로드되었을 때만 표시
                <div>
                    <h3>{productInfo.productName}</h3>
                    {/* <p>{productInfo.brand}</p>
                    <p>{productInfo.price}원</p> */}
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
                    <KeywordIcon src="iconPath" />
                    <KeywordLabel selected={selectedKeywords.includes('가성비')}>
                        가성비가 좋아요.
                    </KeywordLabel>
                </KeywordBox>
                <KeywordBox 
                    selected={selectedKeywords.includes('품질')}
                    onClick={() => toggleKeyword('품질')}
                >
                    <KeywordIcon src="iconPath" />
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
                    <KeywordIcon src="iconPath" />
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
        </Container>
    );
};

export default Review;

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
    width: 2vw;
    height: 2vw;
    margin-right: 0.5vw;
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