import styled from 'styled-components'
import TapBar from "../components/TapBar";
import ProductBox from '../components/ProductBox';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useState, useEffect } from 'react';
import axios from "axios";

const ProductListBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}
`;

const ProductBlock = styled.div`
display:flex;
justify-content: space-around;
margin-left: 5px;
`;

const ProductSearchBar =styled.input`
margin:auto; 
width:310px;
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


const ProductList = () => {
const [Search,setSearch]=useState(true)

// const onclick = () => {
//     console.log("클릭")
// }

const apiUrl = 'https://6503-158-247-236-58.ngrok-free.app';

const data = async () => {
    try{
        const res = await axios.get(apiUrl + '/api/v1/products',
        {
            params: {
               page: 0
            },
        },{ withCredentials: true,'Content-Type': `application/json`,'ngrok-skip-browser-warning': '69420', });
    console.log(res.data);
    }
    catch (error) {
        console.error('Error', error);
      }
}

useEffect(() => {
    data();
  }, []);

    return (
        <>
        <ProductListBox>
            {Search ? 
            <div style={{display:'flex', margin:'10px 5px 20px 45px', alignItems:'center'}}>
                <b style={{fontSize:'20px', fontWeight:'600', margin:'auto'}}>페이지이름</b>
                <SearchOutlinedIcon fontSize='large' sx={{marginRight:'10px'}} onClick={()=>setSearch(!Search)}/>
            </div>
            : <div style={{display:'flex', margin:'10px 5px 20px 5px', alignItems:'center'}}>
                <ArrowBackOutlinedIcon fontSize='large' onClick={()=>setSearch(true)}/>
                <label style={{position:'relative'}}>
                    <ProductSearchBar type="search" name="q"></ProductSearchBar>
                    <ProductSearchBtn type='submit' onClick={onclick}><SearchOutlinedIcon sx={{color:'#929294'}}/></ProductSearchBtn>
                </label>
              </div> }
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