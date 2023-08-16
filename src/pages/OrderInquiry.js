import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";

const OrderContainer = styled.div`
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
`;

const OrderStatus = styled.span`
  color: ${props => (props.status === "CANCEL" ? "red" : "green")};
`;

const OrderInquiry = () => {
  const [data, setData] = useState(null);
  const URL = 'https://6503-158-247-236-58.ngrok-free.app'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        
        const response = await axios.get(URL +'/api/v1/orders', {
          headers: {
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

    fetchData();
  }, []);

  if (!data || !data.content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.content.map(order => (
        <OrderContainer key={order.orderId}>
          <OrderHeader>
            <span>Order Date: {new Date(order.orderDate).toLocaleDateString()}</span>
            <OrderStatus status={order.status}>{order.status}</OrderStatus>
          </OrderHeader>
          <ProductList>
            {order.orderProducts.map(product => (
              <ProductItem key={product.productId}>
                <ProductImage src={product.imageUrl} alt={product.productName} />
                <ProductDetails>
                  <h5>{product.productName}</h5>
                  <p>{product.brand}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total Price: ${product.totalPrice.toFixed(2)}</p>
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
