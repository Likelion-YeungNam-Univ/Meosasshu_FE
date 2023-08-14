import styled from 'styled-components'

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
}
`;

const OrderBtn = () => {
    return (
        <>
        <div style={{textAlign: 'center',position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor:'#FFF'}}>
            <OrderBtnInput type="submit" value={"99,000원 주문하기"}/>
        </div>
        </>
    )
}

export default OrderBtn;