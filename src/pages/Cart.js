import React from "react";
import styled from 'styled-components'
import Nav from "../components/Nav";
import CartList from "../components/cart/CartList";
import OrderBtn from "../components/cart/OrderBtn";

const CartBox = styled.div`
border:1px solid #D8D8D8;

@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const Cart = () => {
    return(
        <>
        <CartBox>
        <Nav backTo="/">장바구니</Nav>
        <hr style={{border:'solid 1.5px #F0F1F5'}}/>
        <CartList/>
        </CartBox>
        </>
    )
}
export default Cart;