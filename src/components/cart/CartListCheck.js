import styled from 'styled-components'


const CartBox= styled.div`
display: flex;
justify-content: space-between;
margin-left:10px;
margin-right:20px;

`;

const CartAllCheck = styled.input`
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


const CartListCheck = () => {
    return(
        <>
        <CartBox>
        <label style={{display:'flex', alignItems:'center'}}>   
            <CartAllCheck type="checkbox"/>
            <span style={{fontSize:'15px', color:'#929294', marginLeft:'10px', fontStyle: 'normal' }}>전체선택(2/2)</span>
        </label>
        <b style={{fontSize:'15px', fontStyle: 'normal'}}>선택삭제</b>
        </CartBox>
        <hr style={{border:'solid 1.5px #F0F1F5', marginTop:'1.5em'}}/>
        </>
    )
}

export default CartListCheck;