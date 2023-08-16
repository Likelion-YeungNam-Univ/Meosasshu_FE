import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";

const OrderContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e0e0e0;
`;

const ProductList = styled.div``;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const ProductDetails = styled.div`
  flex: 1;
  font-size: 14px;
`;

const OrderStatus = styled.span`
  font-weight: bold;
  color: ${props => (props.status === "CANCEL" ? "red" : "green")};
`;

const OrderInquiry = () => {
  const [data, setData] = useState(null);
  const URL = 'https://6503-158-247-236-58.ngrok-free.app';

  useEffect(() => {
    const fetchOrders = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      
      try {
        const response = await axios.get(URL +'/api/v1/orders', {
          headers: {
            'ngrok-skip-browser-warning': '69420',
            "withCredential": "true",
            "Content-Type": "application/json",
            "accessToken": accessToken,
            "refreshToken": refreshToken
          }
        });
        
        setData(response.data);
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
      {data.content.map(order => (
        <OrderContainer key={order.orderId}>
          <OrderHeader>
            <span>주문 날짜: {new Date(order.orderDate).toLocaleDateString()}</span>
            <OrderStatus status={order.status}>
              {order.status === "CANCEL" ? "취소됨" : "진행중"}
            </OrderStatus>
          </OrderHeader>
          <ProductList>
            {order.orderProducts.map(product => (
              <ProductItem key={product.productId}>
                <ProductImage src={product.imageUrl} alt={product.productName} />
                <ProductDetails>
                  <h5>{product.productName}</h5>
                  <p>브랜드: {product.brand}</p>
                  <p>수량: {product.quantity}</p>
                  <p>총 가격: ₩{product.totalPrice.toFixed(2)}</p>
                </ProductDetails>
              </ProductItem>
            ))}
          </ProductList>
        </OrderContainer>
      ))}
    </div>
  );
};

export default OrderInquiry;