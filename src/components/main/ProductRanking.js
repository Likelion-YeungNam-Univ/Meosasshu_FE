import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductBox from '../ProductBox';
import RankingImg from '../../assets/Fairytale.png';
import {  useNavigate } from 'react-router-dom';

const ProductRanking = () => {
    const [products, setProducts] = useState([]);
    const url = 'http://118.67.134.65:8080'
    const API_URL = url + '/api/v1/products/top-sellers';

    const navigate = useNavigate();

    const goToProductDetail = (productId) => {
        navigate('/product', {state:{ productId }});
    };


    useEffect(() => {
        // API 호출
        axios.get(API_URL,
            {
                headers: {
                  'ngrok-skip-browser-warning': '69420',
                },
                withCredentials: true,
            })
            .then(response => {
                // 상위 4개의 상품만 가져옵니다.
                const topProducts = response.data.content.slice(0, 4);
                setProducts(topProducts);
                console.log(topProducts);
            })
            .catch(error => {
                console.error("Error fetching the products:", error);
            });
    }, []);

    return (
        <>
        <ProductRankingBox>
            <div style={{display:'flex', margin:'20px 10px', alignItems:'center'}}>
                <div style={{flex:'1', fontSize: '20px', fontWeight: '600'}}>인기 상품</div>
                {/* <div style={{color:'#B4B4B4', fontSize: '15px'}}> 더보기&gt;&gt; </div> */}
            </div>
            
            <ProductRaingkBlock>
                {products.slice(0, 2).map((product, index) => (
                    <Label onClick={() => goToProductDetail(product.id)}key={product.id}>
                        <ProductBox 
                            thumbnailUrl={product.thumbnailUrl}
                            brand={product.brand}
                            productName={product.productName}
                            price={product.price}
                        />
                        {index === 0 && <img src={RankingImg} alt="1위" style={{position:'absolute', bottom:'140px',left:'120px'}}/>}
                        <Ranking>{index + 1}위</Ranking>
                    </Label>
                ))}
            </ProductRaingkBlock>

            <ProductRaingkBlock>
                {products.slice(2, 4).map((product, index) => (
                    <Label onClick={() => goToProductDetail(product.id)}  key={product.id}>
                        <ProductBox 
                            thumbnailUrl={product.thumbnailUrl}
                            brand={product.brand}
                            productName={product.productName}
                            price={product.price}
                        />
                        <Ranking>{index + 3}위</Ranking>
                    </Label>
                ))}
            </ProductRaingkBlock>
            
            <hr style={{border:'solid 30px #FFF'}}/>
        </ProductRankingBox>
        </>
    );
}

export default ProductRanking;

// 나머지 styled-components 코드는 그대로 유지합니다.


const ProductRankingBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const ProductRaingkBlock = styled.div`
display:flex;
justify-content: space-around;
margin-left: 5px;
`;

const Label = styled.label`
position:relative;
`;

const Ranking = styled.b`
position: absolute;
bottom: 145px;
left: 130px
`;