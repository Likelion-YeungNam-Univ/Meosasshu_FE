import styled from 'styled-components';
import Navbar from '../components/Nav';
import React, { useState } from 'react';

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
  margin: 10px;

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
`;

const Method = styled.div`
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
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 95%;
  padding-top: 10px;
  margin: 0 auto 10px;
  color: #FFF;
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  margin-top: 50px;

  &:hover {
    background-color: #BCC454;
  }
`;

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

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <section>
      <Container>
        <Form>
          <Navbar>주문/결제</Navbar>
          <Heading><Title>주문상품 총 1개</Title></Heading>
          <Section>
            <Method>
              <Title>배송지 정보</Title>
              <Link href='/AddressChange'> 변경하기 </Link>
              <Address>경북 경산시 대학교280<br/>영남대학교</Address>
              <Select selectedOption={selectedOption} onChange={handleOptionChange}>
                <Option value="request">배송 시 요청사항을 선택해주세요</Option>
                <Option value="security">부재 시 경비실에 맡겨주세요</Option>
                <Option value="parcel">부재 시 택배함에 넣어주세요</Option>
                <Option value="contact">배송 전 연락 바랍니다</Option>
              </Select>
            </Method>
          </Section>
          <Total>총 결제 금액</Total>
          <Price>총 상품금액</Price>
          <Price>상품할인</Price>
          <Price>배송비 무료배송</Price>
          <DetailContainer>
            <Method>
              결제 방법
            </Method>
              <Button>구매</Button>
          </DetailContainer>
        </Form>
      </Container>
    </section>
  );
};

export default Payment;