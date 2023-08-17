import React from 'react'
import styled from 'styled-components';
//import { useNavigate } from 'react-router-dom';

const ProductListItem = ({res}) => {
    // const navigate = useNavigate();
    // const goProduct = ()=>{
    //   navigate(`//${res.id}`)
    // }

  return (
    <>
    <ProductContainer>
          <ItemImage src={res.thumbnailUrl} alt="상품 이미지" />
          <ItemTitle>{res.brand}</ItemTitle>
          <ItemDescription>{res.productName}</ItemDescription>
          <ItemPrice>{res.price}</ItemPrice>
          <hr style={{border:'solid 1.5px #F0F1F5'}}/>
    </ProductContainer>
    </>
  )
}

export default ProductListItem;

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
`;
