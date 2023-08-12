import React from 'react';
import styled from 'styled-components';

const ProductBox = () => {
  return (
    <section>
      <ProductContainer>
          <ItemImage src="https://via.placeholder.com/180x180" alt="상품 이미지" />
          <ItemTitle>상품 이름</ItemTitle>
          <ItemDescription>상품 설명란</ItemDescription>
          <ItemPrice>상품 가격</ItemPrice>
      </ProductContainer>
    </section>
  );
};

export default ProductBox;

const ProductContainer = styled.div`
    padding: 5px;
    width: 185px; 
    height: 300px;
`;

const ItemImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius: 2px;
`;

const ItemTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 15px;
`;

const ItemDescription = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3px;
`;

const ItemPrice = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
