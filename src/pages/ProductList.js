import styled from 'styled-components'
import TapBar from "../components/TapBar";
import ProductListItem from '../components/ProductListItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
const [searchProduct,setSearchProduct] = useState(null);
const location = useLocation();
const  inputMic = location.state.transcript;
const [keyword, setKeyword]=useState(inputMic || '');

const apiUrl='https://1511-222-233-66-35.ngrok-free.app';

const data = async() => {
    try{
        const res = await axios.get(apiUrl+'/api/v1/products/search?',{
        headers: {'Content-Type': `application/json`,'ngrok-skip-browser-warning': '69420',},
        params: {keyword: keyword}
        }
)
        //console.log(res.data);
        setSearchProduct(res.data);
    }
    catch (error) {
        console.error('Error:',error);
    }
}

    useEffect(() => {
        if (keyword) {
        data();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    const searchKeyword = (e) => {
        setKeyword(e.target.value);
      };


      //console.log(searchProduct)
    return (
        <>
        <ProductListBox>
             <div style={{display:'flex', margin:'10px 5px 20px 5px', alignItems:'center'}}>
                <ArrowBackOutlinedIcon fontSize='large'/>
                <label style={{position:'relative'}}>
                    <ProductSearchBar type="text" value={keyword} onChange={searchKeyword}></ProductSearchBar>
                    <ProductSearchBtn type='submit' ><SearchOutlinedIcon sx={{color:'#929294'}}/></ProductSearchBtn>
                </label>
              </div> 
            <ProductBlock>
                {searchProduct?.content.map((res)=><ProductListItem key={res.id} res={res}/>)}
            </ProductBlock>
            
            <hr style={{border:'solid 30px #FFF'}}/>
            <TapBar/>
        </ProductListBox>
        </>
    )
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
