import styled from "@emotion/styled";
import Search from "../components/Search";
import TapBar from "../components/TapBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const CategoryDetail = () => {
    const location = useLocation();
    const categoryId = location.state.id;
    const [products, setProducts] = useState([]); // 추가

    const navigate = useNavigate();

    const goToProductDetail = (productId) => {
        navigate('/product', {state:{ productId }});
    };

    const apiUrl='http://118.67.134.65:8080';

    const Data = async() => {
        try{
            const res = await axios.get(`${apiUrl}/api/v1/category/${categoryId}/products`,{
            headers: {
                'Content-Type': `application/json`,
                'ngrok-skip-browser-warning': '69420',},
            }
        )
            //console.log(res.data);
            setProducts(res.data); 
        }
        catch (error) {
            console.error('Error:',error);
        }
    }

    useEffect(() => {
        Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
        <CategoryDetailBox>
            <div style={{marginLeft:'25px'}}><Search/></div>
            <hr style={{border:'solid 10px #FFF'}}/>
            <ProductBlock>
                    {products.map((product) => (
                        <ProductContainer onClick={() => goToProductDetail(product.id)} key={product.id}>
                            <ItemImage src={product.thumbnailUrl} alt={product.productName} />
                            <ItemTitle>{product.brand}</ItemTitle>
                            <ItemDescription>{product.productName}</ItemDescription>
                            <ItemPrice>{product.price}</ItemPrice>
                            <hr style={{border:'solid 1.5px #F0F1F5'}}/>
                        </ProductContainer>
                    ))}
            </ProductBlock>

            <hr style={{border:'solid 30px #FFF'}}/>
            <TapBar/>
        </CategoryDetailBox>
        </>
    )
}

export default CategoryDetail;

const CategoryDetailBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const ProductBlock = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 5px;
`;

const ProductContainer = styled.div`
    padding: 5px;
    width: 170px; 
    height: 300px;
`;

const ItemImage = styled.img`
  width: 165px;
  height: 165px;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius: 2px;
`;

const ItemTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 15px;
`;

const ItemDescription = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3px;
`;

const ItemPrice = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// const SearchLink= styled(Link)`
//     color: #000;
//     text-decoration: none;
// `;