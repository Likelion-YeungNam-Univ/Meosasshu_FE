import styled, { css } from 'styled-components';
import Nav from '../components/Nav';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [showContent, setShowContent] = useState(false);
    const [productData, setProductData] = useState({});
    const [summaryContent, setSummaryContent] = useState(''); // 초기값 설정 필요
    const [detailedContent, setDetailedContent] = useState(''); // 초기값 설정 필요

    const apiUrl = 'https://6503-158-247-236-58.ngrok-free.app';

    const toggleContent = () => {
        setShowContent(prevShowContent => !prevShowContent);
    };

    useEffect(() => {
        const send = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');
                const res = await axios.get(apiUrl + '/api/v1/products/1', {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': '69420',
                    },
                });
                console.log('AccessToken:', accessToken);
                console.log('RefreshToken:', refreshToken);
                console.log(res.data); 
                setProductData(res.data); 
                setSummaryContent(res.data.shortDescription);
                setDetailedContent(res.data.description);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        send(); // 초기 렌더링 시 데이터 가져오기 호출
    }, []);
    
    return (
      <Container>
        <Box>
          <Nav />
          <ProductContainer>
          <ItemImage src={productData.thumbnailUrl} alt="상품 이미지" />
          <ItemDescription>{productData.name}</ItemDescription>
          <PriceContainer>
          <PriceInfo>
              <ItemPrice>{productData.price}</ItemPrice>
              <OriginalPrice>{productData.originalPrice}</OriginalPrice>
            </PriceInfo>
            <SaleText>{productData.salePercentage} 50% SALE</SaleText>
          </PriceContainer>
            <GPTBox>
              <Title>chatGPT로 상품 정보를 요약했어요</Title>
              <Content>{summaryContent}</Content>
              {showContent && (
            <>
              <Content>{detailedContent}</Content>
              <ViewMore onClick={toggleContent}>접기</ViewMore>
            </>
          )}
          {!showContent && (
            <ViewMore onClick={toggleContent}>자세히 보기</ViewMore>
          )}
        </GPTBox>
          </ProductContainer>
          <ReviewBox>
          <ReviewContent>리뷰</ReviewContent>
            <BarChart>
              <Bar value={80} />
              <CostPerformance>가성비가 좋아요</CostPerformance>
            </BarChart>
            <BarChart>
              <Bar value={40} />
              <CostPerformance>품질이 좋아요</CostPerformance>
            </BarChart>
            <BarChart>
              <Bar value={55} />
              <CostPerformance>배송이 빨라요</CostPerformance>
            </BarChart>
            <ReviewButtonContainer>
                <ReviewButton>리뷰 더보기</ReviewButton>
                <Link to="/Review">
                    <ReviewButton>리뷰 작성하기</ReviewButton>
                </Link>
            </ReviewButtonContainer>
          </ReviewBox>
          <ChoseBox>
            <Link to="/cart">
                <Buybutton>장바구니</Buybutton>
            </Link>
            <Link to="/payment">
                <Buybutton purchase>구매</Buybutton>
            </Link>
          </ChoseBox>
      </Box>
    </Container>
  );
};
export default Product;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const OriginalPrice = styled.span`
  color: #B4B4B4;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: line-through;

  
`;


const SaleText = styled.span`
    color: #F00;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 15px;
    margin-left: auto;
`;

const ReviewButton = styled.button`
    color: #BCC454;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 5px;
    border: 3px solid #BCC454;
    background: #FFF;
    width: 150px;
    height: 52px;
    flex-shrink: 0;
    margin-right: 20px;
    margin-left:13px;
`;

const ReviewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

`;


const ReviewContent = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  text-align: left;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right:300px;
  margin-bottom:10px;

`;


const ReviewBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  flex-direction: column;
`;

const BarChart = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  height: 54px;
  background-color: #FFF;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom:20px;
  border:1px solid #BCC454;
  position: relative; 
`;

const CostPerformance = styled.div`
  position: absolute;
  left: 23%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  z-index: 2;
`;

const Bar = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: #BCC454;
  border-radius: 3px;
  position: relative;
`;
const ViewMore = styled.span`
  cursor: pointer;
  color: #929294;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  display: block;
`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid #ccc;
  width: 365px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
  width: 95%;
  height: 100%;
  margin-left:5px;
  margin-bottom:30px;
`;



const ItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin: auto;
  display: block;
  border-radius: 2px;
 
`;

const GPTBox = styled.div`
  border: 1px solid #BCC454;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  text-align: center;

  ${props => props.responsive && css`
    @media (min-width: 768px) {
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      font-size: 24px;
    }
  `}
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom:10px;
`;

const ItemDescription = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
`;

const ItemPrice = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;

const ChoseBox = styled.div`
    position: fixed;
    bottom: 0; 
    left: 0; 
    width: 103%; 
    background:#FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Buybutton = styled.button`
    margin-top: 10px;
    border: 1px solid #BCC454;
    border-radius: 15px;
    padding: 10px 0px 10px 0px;
    background: ${props => props.purchase ? "#BCC454" : "#FFF"};
    color: ${props => props.purchase ? "#FFF" : "#BCC454"};
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 150px; 
    height: 60px; 
    margin-right: 25px;
    margin-bottom:10px;
`;
const Content = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom:20px;
    text-align: left;
    `;