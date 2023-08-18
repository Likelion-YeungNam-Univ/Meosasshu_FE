import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';

const CartList = () => {
    const [products, setProducts] = useState([]);

    const apiUrl='http://118.67.134.65:8080';

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
                    <CartListItemCheck type="checkbox"/>
                    <img src={product.imageUrl} alt={product.productName} style={{marginLeft:'10px'}}/>
                <div style={{display:'flex', alignItems:'center', maxWidth:'auto', margin:'auto'}}>
                    <DoNotDisturbOnOutlinedIcon />
                    <span style={{marginLeft:'5px', marginRight:'5px'}} >{product.quantity}</span>
                    <AddCircleOutlineIcon />
                </div>
                </div>
                <div style={styleDelet}>삭제</div>
                <hr style={{border:'solid 1.5px #F0F1F5'}}/>
                <ProductInform> {product.brand}</ProductInform>
                <ProductInform> {product.productName}</ProductInform>
                <ProductInform>상품 금액 {product.totalPrice}원</ProductInform>
                <ProductInform>할인 50%</ProductInform>
                <ProductInform>배송비 0원</ProductInform>
                <hr style={{border:'solid 5px #F0F1F5'}}/>
            </div>
        ))}
        <hr style={{border:'solid 35px #FFF'}}/>
        <div style={{textAlign: 'center',position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor:'#FFF'}}>
            <Link to="/payment"><OrderBtnInput type="submit" value={`${totalOrderPrice }원 주문하기`}/></Link>
        </div>
        </>
    )
}

export default CartList;



const CartListItemCheck = styled.input`
  appearance: none;
  border-radius: 0.2em;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  width: 18px;
  height: 18px;
  background-color: #929294;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #BCC454;
  }
`;

const ProductInform = styled.div`
margin: 5px 10px 15px;
color: #929294;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
`;

const styleDelet = {
    display:'flex', 
    justifyContent:'flex-end',
    marginRight:'10px',
    fontSize: '15px',
    color: '#929294',
    fontStyle: 'normal',
};

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