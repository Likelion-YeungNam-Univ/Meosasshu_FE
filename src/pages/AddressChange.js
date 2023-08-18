
import styled from 'styled-components';
import Address from '../components/Address';

import { Link } from 'react-router-dom';
import BackIcon from '../assets/arrow.png';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px 3px ;
  border: 1px solid #fff;
  background-image: url(${BackIcon});
  background-size: cover;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:10px;
`;


const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; 
  margin-right:25px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;


const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginForm = styled.div`
  width: 365px; 
  
  @media (max-width: 768px) {
    width: 100%;
`;


const Ab = styled.div`
    justify-content: flex-start;
    width: auto;
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 20px 0px 20px 10px;
    margin-top:20px;
`;

const Article = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

`;

const PaymentMethod = styled.div`
  padding: 25px 0px 20px 2px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
  border-top: 1px solid #D8D8D8;
  text-align: center;

  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding-bottom:180px
  
`;

const PostcodeContainer = styled.div`
  margin-top:35px;
  
`;


const BuyButton = styled.button`
  background-color: #929294;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  width: 95%;
  padding-top: 5px;
  padding-bottom:5px;
  margin-left:15px;
 
  color: #FFF;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  margin-bottom:10px;
  margin-top:50px;

  &: hover {
    background-color:#BCC454;
  }
`;

const Myaddress = styled.button`
  background-color: #929294;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 150px;
  padding: 5px; 
  margin-left: auto; 
  margin-top: 25px;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  &:hover {
    background-color: #BCC454;
  }
`;


const AddressChange = () => {


  return (
    <section>
      <LoginPageContainer>
        <LoginForm>
         <NavbarContainer>
                <BackButton to="/payment" />
           <CenteredContent>
                주소 변경
           </CenteredContent>
          </NavbarContainer>
          <Ab><Article>주소를 입력해 주세요.</Article></Ab>
          <PaymentMethod>
            <PostcodeContainer>
              <Address />
              <Myaddress>내 주소 불러오기</Myaddress>
            </PostcodeContainer>
          </PaymentMethod>
          <BuyButton>구매</BuyButton>
        </LoginForm>
      </LoginPageContainer>
    </section>
  );
};

export default AddressChange;











