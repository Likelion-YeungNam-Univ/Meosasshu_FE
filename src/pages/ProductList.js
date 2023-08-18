import styled from 'styled-components';
import TapBar from "../components/TapBar";
import ProductListItem from '../components/ProductListItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [searchProduct, setSearchProduct] = useState(null);
    const location = useLocation();
    const inputMic = location.state?.transcript || '';
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const goToProductDetail = (productId) => {
        navigate('/product', {state:{ productId }});
    };

    useEffect(() => {
        setKeyword(inputMic);
    }, [inputMic]);

    const apiUrl = 'http://118.67.134.65:8080';

    const fetchData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/api/v1/products/search`, {
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': '69420',
                },
                params: { keyword }
            });
            setSearchProduct(res.data);
            console.log(res);
        } catch (error) {
            console.error('Error:', error);
        }
    };
  
    useEffect(() => {
        if (keyword) {
            fetchData();
        }
    }, [keyword]);

    const searchKeyword = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <>
            <ProductListBox>
                <div style={{ display: 'flex', margin: '10px 5px 20px 5px', alignItems: 'center' }}>
                    <BackLink to='/'><ArrowBackOutlinedIcon fontSize='large' /></BackLink>
                    <label style={{ position: 'relative' }}>
                        <ProductSearchBar type="text" value={keyword} onChange={searchKeyword} />
                        <ProductSearchBtn type='submit'>
                            <SearchOutlinedIcon sx={{ color: '#929294' }} />
                        </ProductSearchBtn>
                    </label>
                </div>
                <ProductBlock>
                {searchProduct?.content.map((res) => (
                        <div onClick={() => goToProductDetail(res.id)} key={res.id}>
                                <ProductListItem res={res} />
                        </div>
                    ))}
                </ProductBlock>

                <hr style={{ border: 'solid 30px #FFF' }} />
                <TapBar />
            </ProductListBox>
        </>
    );
}

export default ProductList;

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
flex-wrap: wrap;
display:flex;
justify-content: flex-start;
margin-left: 5px;
`;

const ProductSearchBar =styled.input`
margin:auto; 
width:280px;
height:35px;
border:none;
background:#F0F1F5;
border-radius:2em;
padding-left:10px;
padding-right:30px;
`;

const ProductSearchBtn =styled.button`
position:absolute; 
left:275px;
top: 3px;
border:none; 
background: transparent;
`;

const BackLink = styled(Link)`
color: #000;
text-decoration: none;
`;
