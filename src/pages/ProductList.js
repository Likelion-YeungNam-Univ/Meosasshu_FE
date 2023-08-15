import styled from 'styled-components'
import TapBar from "../components/TapBar";
import ProductBox from '../components/ProductBox';

const ProductListBox = styled.div`
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
justify-content: space-around;
margin-left: 5px;
`;

const ProductList = () => {
    return (
        <>
        <ProductListBox>
            <div>헤더</div>
            <ProductBlock>
                <ProductBox/>
                <ProductBox/>
            </ProductBlock>
            <hr style={{border:'solid 1.5px #F0F1F5'}}/>
            <ProductBlock>
                <ProductBox/>
                <ProductBox/>
            </ProductBlock>
            <hr style={{border:'solid 1.5px #F0F1F5'}}/>
            <ProductBlock>
                <ProductBox/>
                <ProductBox/>
            </ProductBlock>
            <hr style={{border:'solid 1.5px #F0F1F5'}}/>
            
            <hr style={{border:'solid 30px #FFF'}}/>
            <TapBar/>
        </ProductListBox>
        </>
    )
}


export default ProductList;