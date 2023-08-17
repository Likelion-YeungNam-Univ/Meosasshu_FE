import styled from 'styled-components';
import Nav from '../components/Nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [productData, setProductData] = useState({});

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const apiUrl = 'https://6503-158-247-236-58.ngrok-free.app';

  useEffect(() => {
      const send = async () => {
          try {
              const accessToken = localStorage.getItem('accessToken');
              const refreshToken = localStorage.getItem('refreshToken');
              const res = await axios.get(apiUrl + '/api/v1/products/1/order-form?quantity=1', {
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
              console.log(res.data.orderProducts); 
              setProductData(res.data); 
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      send(); // 초기 렌더링 시 데이터 가져오기 호출
  }, []);

  return (
    <section>
      <Container>
        <Form>
          <Nav backTo = '/procuct'>주문/결제</Nav>
          <Heading>
            <Title>주문상품 총 {productData.orderProducts ? productData.orderProducts[0].quantity : 0}개</Title>
          </Heading>
          <Section>
            <Information>
              <Title>배송지 정보</Title>
              <Link href='/AddressChange'> 변경하기 </Link>
              <Address>경북 경산시 대학교280<br/>영남대학교</Address>
              <Select selectedOption={selectedOption} onChange={handleOptionChange}>
                <Option value="request">배송 시 요청사항을 선택해주세요</Option>
                <Option value="security">부재 시 경비실에 맡겨주세요</Option>
                <Option value="parcel">부재 시 택배함에 넣어주세요</Option>
                <Option value="contact">배송 전 연락 바랍니다</Option>
              </Select>
            </Information>
          </Section>
          <Total>
            <FlexContainer>
              <Span>총 결제 금액</Span>
              <Span>{productData.totalPrice}</Span>
            </FlexContainer>
          </Total>
          <Price>
            <FlexContainer>
              <Span>총 상품금액</Span>
              <Span>{productData.totalPrice/2}</Span>
            </FlexContainer>
          </Price>
          <Price>
            <FlexContainer>
              <Span>상품할인</Span>
              <Span>50%SALE</Span>
            </FlexContainer>
          </Price>
          <Price>
            <FlexContainer>
              <Span>배송비</Span>
              <Span>0원</Span>
            </FlexContainer>
          </Price>
          <DetailContainer>
            <Method>
              결제 방법
              <NaverPay>네이버 페이</NaverPay>
            </Method>
            <Button>구매</Button>
          </DetailContainer>
        </Form>
      </Container>
    </section>
  );
};

export default Payment;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Span = styled.span`
  margin-right:20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  border: 1px solid #ccc;
  width: 365px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  justify-content: flex-start;
  width: auto;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  padding: 20px 0px 20px 10px;
  margin-top: 20px;
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
`;

const Section = styled.div`
  justify-content: flex-start;
  border-bottom: 1px solid #D8D8D8;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #355796;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: none;
  display: flex; 
  justify-content: flex-end; 
  margin-right:20px;
`;
const Total = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  padding: 20px 0px 20px 10px;
  border-bottom: 1px solid #D8D8D8;
`;

const Select = styled.select`
  position: relative;
  width: 90%;
  border: 1px solid #D8D8D8;
  background-color: white;
  color: #929294;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  margin-left:15px;

`;

const Price = styled.div`
  color: #929294;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  padding: 20px 0px 10px 10px;
  
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom:10px;
`;

const Method = styled.div`
  display: flex; 
  align-items: flex-start; 
  padding: 25px 0px 20px 10px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
  border-top: 1px solid #D8D8D8;
  text-align: left;
  margin-bottom:20px;
  ${Link} {
    text-align: left;
  }
`;
const Information = styled.div`
  justify-content: flex-start;
  padding: 25px 0px 20px 10px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
  border-top: 1px solid #D8D8D8;
  text-align: left;
  ${Link} {
    text-align: left;
  }
`;

const Address = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  margin: 15px 0;
`;

const Button = styled.button`
  background-color: #929294;
  font-size: 20px;
  margin-bottom: 5px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 95%;
  padding: 5px 0; 
  margin: 0 auto; 
  color: #FFF;
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px; 
  background-color: #929294;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  

  &:hover {
    background-color: #BCC454;
  }
}`;

const Option = styled.option`
  padding: 10px;
  color: ${props => (props.isSelected ? 'white' : '#000')};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background: #ff00ff;
    color: #fff;
  }
`;

const NaverPay = styled.div`
    color: rgba(51, 51, 51, 0.67);
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left:10px;
    margin-top:5px;
`;