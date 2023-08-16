import styled from 'styled-components';
import Nav from '../components/Nav';
import React, { useState } from 'react';

const Payment = ({ totalPayment, totalProductPrice }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Form>
        <Nav>주문/결제</Nav>
        <Heading>주문상품 총 1개</Heading>
        <Section>
          <Information>
            <AddressBox>
              <Title>배송지 정보</Title>
              <Link href='/AddressChange'>변경하기</Link>
            </AddressBox>
            <Address>경북 경산시 대학교280<br/>영남대학교</Address>
            <Select value={selectedOption} onChange={handleOptionChange}>
              <option value="request">배송 시 요청사항을 선택해주세요</option>
              <option value="security">부재 시 경비실에 맡겨주세요</option>
              <option value="parcel">부재 시 택배함에 넣어주세요</option>
              <option value="contact">배송 전 연락 바랍니다</option>
            </Select>
          </Information>
        </Section>
        <Total>
          <FlexContainer>
            <span>총 결제 금액</span>
            <span>{totalPayment}</span>
          </FlexContainer>
        </Total>
        <Price>
          <FlexContainer>
            <span>총 상품금액</span>
            <span>{totalProductPrice}</span>
          </FlexContainer>
        </Price>
        <Price>
          <FlexContainer>
            <span>상품할인</span>
            <span>상품할인 금액</span>
          </FlexContainer>
        </Price>
        <Price>
          <FlexContainer>
            <span>배송비</span>
            <span>0원</span>
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
  );
};

export default Payment;

const Container = styled.section`
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
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  padding: 20px 0px 20px 10px;
  margin-top: 20px;
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
`;

const AddressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 10px;
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
`;

const Link = styled.a`
  color: #355796;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: none;
`;

const Address = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  margin: 15px 0;
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  margin-bottom: 10px;
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
`;

const NaverPay = styled.div`
  color: rgba(51, 51, 51, 0.67);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
  margin-top: 5px;
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

