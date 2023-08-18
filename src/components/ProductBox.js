import React from 'react';
import styled from 'styled-components';

const ProductBox = ({ thumbnailUrl, brand, productName, price }) => {
  return (
    <section>
      <ProductContainer>
          <ItemImage src={thumbnailUrl || "https://via.placeholder.com/180x180"} alt="상품 이미지" />
          <ItemTitle>{brand}</ItemTitle>
          <ItemDescription>{productName}</ItemDescription>
          <ItemPrice>{price}원 <Discount>50%</Discount></ItemPrice>
      </ProductContainer>
    </section>
  );
};

export default ProductBox;

const ProductContainer = styled.div`
    padding: 5px;
    width: 170px; 
    height: 300px;
`;

const ItemImage = styled.img`
  width: 165px;
  height: 165px;
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
  display: flex;
  align-items: center;
`;

const Discount = styled.span`
  color: red;
  margin-left:50px;
  font-weight: bold;
`;
