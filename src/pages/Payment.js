import styled from 'styled-components';
import Nav from '../components/Nav';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [productData, setProductData] = useState({});
  const [addressData, setAddressData] = useState({});

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const location = useLocation();
  const productId = location.state && location.state.productId ? location.state.productId : 1;
  console.log(productId);
  const apiUrl = 'http://118.67.134.65:8080'; // apiUrl을 여기에 정의해주세요

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src="https://code.jquery.com/jquery-3.6.0.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
    document.head.appendChild(jquery); document.head.appendChild(iamport);

    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
          
        const productResponse = await axios.get(`${apiUrl}/api/v1/products/${productId}/order-form?quantity=1`, {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
          },
        });
  
        const addressResponse = await axios.get(apiUrl + '/api/v1/account/address', {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
          },
        });
  
        console.log('Product Data:', productResponse.data);
        console.log('Address Data:', addressResponse.data);
  
        const mergedData = {
          ...productResponse.data,
          address: addressResponse.data,
        };
  
        setProductData(mergedData);
        setAddressData(addressResponse.data);
        console.log('Merged Data:', mergedData);
        // 추가된 부분: orderProducts 로그 출력
        if (mergedData.orderProducts) {
          console.log('Order Products:', mergedData.orderProducts);
        }

        // productId 값이 null이 아닌지 확인 후, 제대로 설정해줍니다.
        if (mergedData.orderProducts && mergedData.orderProducts[0].productId) {
          setProductData(prevData => ({ ...prevData, productId: mergedData.orderProducts[0].productId }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const requestPay = (orderId) => {
    const { IMP } = window;
    IMP.init('imp36544802');
    
    // orderId를 활용하여 결제 요청 데이터 구성
    IMP.request_pay(
      {
        // 결제 요청 데이터
        pg: 'kakaopay', // PG사
        pay_method: 'card', // 결제수단
        merchant_uid: `${orderId}`, // 주문번호
        amount:  productData.Price ,// 결제금액
        name: '아임포트 결제 데이터 분석', // 주문명
        buyer_name: '홍길동', // 구매자 이름
        buyer_tel: '01012341234', // 구매자 전화번호
        buyer_email: 'example@example', // 구매자 이메일
        buyer_addr: '신사동 661-16', // 구매자 주소
        buyer_postcode: '06018', // 구매자 우편번호
        // 나머지 결제 요청 데이터
      },
      (rsp) => {
        if (rsp.success) {
          alert('success');
        } else {
          alert('결제에 실패하였습니다. 에러 내용: ' + rsp.error_msg);
        }
      }
    );
  };

  const handleOrder = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      
      const orderData = {
        delivery: {
          city: addressData.city,
          street: addressData.street,
          zipcode: addressData.zipcode,
          recipientName: 'John Doe', 
          recipientMobileNumber: '555-123-4567', 
          deliveryMessage: 'Leave package at the front door', 
        },
        orderProducts: [
          {
            quantity: 1,
            productId: productData.productId,
          },
        ],
      };
      
      console.log('orderData:', orderData); // orderData 값 확인
      
      const orderResponse = await axios.post(
        apiUrl + '/api/v1/orders',
        orderData,
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
          },
        }
      );

      console.log('Order response:', orderResponse.data);
      requestPay(orderResponse.data.orderId);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };





  return (
   <PaymentBox>
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
              <Address>{addressData.city}<br/>{addressData.street}<br/>{addressData.zipcode}</Address>
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
              <Span>{productData.totalPrice}</Span>
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
            <Button onClick={handleOrder}>구매</Button>
          </DetailContainer>
        </Form>
      </Container>
    </section>
 

   </PaymentBox>
 );
};

export default Payment;

const PaymentBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

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