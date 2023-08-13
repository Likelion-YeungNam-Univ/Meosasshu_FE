import React from "react";
import styled from 'styled-components'
import Navbar from "../components/Nav";
import CartListCheck from "../components/cart/CartListCheck";
import CartList from "../components/cart/CartList";
import OrderBtn from "../components/cart/OrderBtn";

const CartBox = styled.div`
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
        <Navbar></Navbar>
        <div><CartListCheck/></div>
        <CartList/>
        <OrderBtn/>
        </CartBox>
        </>
    )
}
export default Cart;