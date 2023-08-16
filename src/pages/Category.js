import styled from "@emotion/styled";
import Search from "../components/Search";
import TapBar from "../components/TapBar";
import Clothes from "../assets/Clothes.png";
import DoctorsBag from "../assets/Doctors Bag.png";
import  Therapy from "../assets/Therapy.png";
import Caretaker from "../assets/Caretaker.png";
import Nappy from "../assets/Nappy.png";
import { Link } from "react-router-dom";

const Category = () => {
    return(
        <>
        <CategoryBox>
            <Search/>
            <div style={{background:'#F0F1F5', height:'100vh', paddingTop:'20px'}}>
                <CategoryBlock>
                    <CategoryLink to="">
                        <CategoryItem>
                            <img  src={Clothes} alt="의류"/>
                            <CategoryItemName>의류</CategoryItemName>
                        </CategoryItem>
                    </CategoryLink>
                    <CategoryLink to="">
                        <CategoryItem>
                            <img  src={DoctorsBag} alt="건강식품"/>
                            <CategoryItemName>건강식품</CategoryItemName>
                        </CategoryItem>
                    </CategoryLink>
                </CategoryBlock>
                <CategoryBlock>
                   <CategoryLink to="">
                        <CategoryItem>
                            <img  src={Therapy} alt="의료용품"/>
                            <CategoryItemName>의료용품</CategoryItemName>
                        </CategoryItem>
                    </CategoryLink>
                    <CategoryLink to="">
                        <CategoryItem>
                            <img  src={Caretaker} alt="생활용품"/>
                            <CategoryItemName>생활용품</CategoryItemName>
                        </CategoryItem>
                    </CategoryLink>
                </CategoryBlock>
                <CategoryLink to="">
                    <CategoryItem style={{marginLeft:'9px'}}>
                            <img  src={Nappy} alt="귀저기"/>
                            <CategoryItemName>귀저기</CategoryItemName>
                    </CategoryItem>
                </CategoryLink>
            </div>
            <TapBar/>
        </CategoryBox>
        </>
    )
}

export default Category;

const CategoryBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const CategoryBlock = styled.div`
display:flex;
justify-content: space-around;
`;

const CategoryItem = styled.div`
width:165px;
height:165px;
background:#BCC454;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 1em;
`;

const CategoryItemName = styled.div`
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
`;

const CategoryLink = styled(Link)`
color: #000;
text-decoration: none;
`;
