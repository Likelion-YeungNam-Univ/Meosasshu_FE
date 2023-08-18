import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';

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

const CartListItemPrice = styled.div`
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

const CartListItem = () => {
    return (
      <>
      <div>
        <div style={{display:'flex', alignItems:'center', margin:'10px', marginBottom:'0px'}}>
            <CartListItemCheck type="checkbox"/>
            <img src="https://via.placeholder.com/150" alt="샘플이미지" style={{marginLeft:'10px'}}/>
          <div style={{display:'flex', alignItems:'center', maxWidth:'auto', margin:'auto'}}>
            <DoNotDisturbOnOutlinedIcon/>
            <span style={{marginLeft:'5px', marginRight:'5px'}}>1</span>
            <AddCircleOutlineIcon/>
          </div>
        </div>
        <div style={styleDelet}>삭제</div>
        <hr style={{border:'solid 1.5px #F0F1F5'}}/>
        <CartListItemPrice>상품 금액 100,000원</CartListItemPrice>
        <CartListItemPrice>할인 금액 30,000원</CartListItemPrice>
        <CartListItemPrice>배송비 2,500원</CartListItemPrice>
        <hr style={{border:'solid 5px #F0F1F5'}}/>
      </div>
      </>
    )
}

export default CartListItem;