import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';

const CartList = () => {
    const [products, setProducts] = useState([]);

    const apiUrl='https://c297-2001-e60-109d-2c59-8ce9-5099-f68c-2168.ngrok-free.app';

    useEffect(() => {
        const getProduct = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');
                const res = await axios.get(apiUrl + '/api/v1/cart', {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': '69420',
                        'accessToken':accessToken,
                        'refreshToken':refreshToken,
                    },
                });
                console.log('AccessToken:', accessToken);
                console.log('RefreshToken:', refreshToken);
                console.log(res.data);
                setProducts(res.data.orderProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };;
        getProduct(); // 초기 렌더링 시 데이터 가져오기 호출
    }, []);

    const totalOrderPrice = products.reduce((total, product) => total + product.totalPrice, 0);

    return (
        <>
        {products.map((product) => (
            <div  key={product.productId}>
                <div style={{display:'flex', alignItems:'center', margin:'10px', marginBottom:'0px'}}>
                    <img src={product.imageUrl} alt={product.productName} style={{marginLeft:'10px', width:'170px', height:'170px'}}/>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                        <div style={{marginLeft:'10px'}}>
                         <div style={{color: '#929294',fontSize: '15px'}}> {product.brand}</div>
                         <div style={{marginTop:'10px'}}><b style={{fontSize: '18px'}}> {product.productName}</b></div>
                        </div>
                    </div>
                </div>
                <hr style={{border:'solid 1.5px #F0F1F5'}}/>
                <div style={{margin:'5px 10px 15px'}}>
                    <span style={{color: '#929294',fontSize: '18px', marginRight:'10px'}}>상품 금액</span>
                    <span style={{fontSize: '18px'}}> {product.totalPrice}원</span>
                </div>
                <div style={{marginBottom: '15px'}}>
                    <ProductInform>할인율 </ProductInform>
                    <span style={{fontSize: '18px'}}>50%</span>
                </div>
                <div>
                <ProductInform>배송비 </ProductInform>
                <span style={{fontSize: '18px'}}>0원</span>
                </div>
                <hr style={{border:'solid 5px #F0F1F5'}}/>
            </div>
        ))}
        <hr style={{border:'solid 35px #FFF'}}/>
        <div style={{textAlign: 'center',position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor:'#FFF'}}>
            <Link to="/paymentcart"><OrderBtnInput type="submit" value={`${totalOrderPrice }원 주문하기`}/></Link>
        </div>
        </>
    )
}

export default CartList;


const ProductInform = styled.span`
margin: 5px 10px 15px;
color: #929294;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
`;


const OrderBtnInput=styled.input`
margin-top:15px;
border-radius: 0.6em;
border: none;
background-color: #929294;
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 550;

&: hover {
    background-color:#BCC454;
}

@media only screen and (min-width: 430px) {
    width: 345px;
    height: 50px;
    margin-bottom: 20px;
}

@media only screen and (max-width: 430px) {
    width: 90vw;
    height: 50px;
    margin-bottom: 15px;
}`

const OriginalPrice = styled.span`
  color: #929294;
  font-size: 15px;
  text-decoration: line-through;

  
`;