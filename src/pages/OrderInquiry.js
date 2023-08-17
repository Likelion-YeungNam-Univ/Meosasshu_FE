import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const OrderContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin: 25px 0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const OrderHeader = styled.div`
  color: #929294;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
`;

const ProductList = styled.div``;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 18px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  margin-left:20px;
  flex: 1;
  font-size: 16px;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: center;
`;


const ActionButton = styled.button`
  flex: 1;
  font-size:15px;
  font-weight:500;
  margin-top: 20px;
  margin-right: 10px;
  padding: 5px 0;
  border: 1px solid #DEDEDE;
  width: 156px;
  height: 52px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #FFF;
  text-align: center;

  &:hover {
    background-color: #e0e0e0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const BrandText = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const ProductNameText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const QuantityText = styled.p`
`;

const PriceText = styled.p`

`;


const OrderInquiry = () => {
  const handleReviewButtonClick = (productId, orderId) => {
    navigate('/review', { state: { productId, orderId } });
  };  
  
  const [data, setData] = useState(null);
  const URL = 'https://1511-222-233-66-35.ngrok-free.app';
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOrders = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const response = await axios.get(URL + '/api/v1/orders', {
          headers: {
            'ngrok-skip-browser-warning': '69420',
            "withCredential": "true",
            "Content-Type": "application/json",
            "accessToken": accessToken,
            "refreshToken": refreshToken
          }
        });

        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchOrders();
  }, []);

  if (!data || !data.content) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <Nav backTo="/profile">주문 조회</Nav>
      {data.content.map(order => (
        <OrderContainer key={order.orderId}>
          <OrderHeader>
          <span>{new Date(...order.orderDate).toLocaleDateString()}</span>
          </OrderHeader>
          <ProductList>
            {order.orderProducts.map(product => (
              <ProductItem key={product.productId}>
                <ProductContent>
                  <TopRow>
                    <ProductImage src={product.imageUrl} alt={product.productName} />
                    <ProductDetails>
                     <BrandText>{product.brand}</BrandText>
                    <div>
                      <ProductNameText>{product.productName}</ProductNameText>
                      <QuantityText>수량: {product.quantity}</QuantityText>
                    </div>
                    <PriceText>{product.totalPrice.toFixed(2)}원</PriceText>
                  </ProductDetails>
                  </TopRow>
                  <ButtonContainer>
                    <ActionButton>배송조회</ActionButton>
                    <ActionButton style={{border: '1px solid #BCC454', color:'#BCC454'}}onClick={() => handleReviewButtonClick(product.productId, order.orderId)}>
                      리뷰 작성하기
                    </ActionButton>
                  </ButtonContainer>
                </ProductContent>
              </ProductItem>
            ))}
          </ProductList>
        </OrderContainer>
      ))}
    </div>
  );
};

export default OrderInquiry;
