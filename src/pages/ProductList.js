import styled from 'styled-components'
import TapBar from "../components/TapBar";
import ProductListItem from '../components/ProductListItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    
const [Search,setSearch]=useState(true);
const [keyword, setKeyword]=useState('');
const [searchProduct,setSearchProduct] = useState(null);

const apiUrl='https://6503-158-247-236-58.ngrok-free.app';

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
            {Search ? 
            <div style={{display:'flex', margin:'10px 5px 20px 45px', alignItems:'center'}}>
                <SearchOutlinedIcon fontSize='large' sx={{marginLeft:'85%'}} onClick={()=>setSearch(!Search)}/>
            </div>
            : <div style={{display:'flex', margin:'10px 5px 20px 5px', alignItems:'center'}}>
                <ArrowBackOutlinedIcon fontSize='large' onClick={()=>setSearch(true)}/>
                <label style={{position:'relative'}}>
                    <ProductSearchBar type="text"
                                      value={keyword}
                                      onChange={searchKeyword}></ProductSearchBar>
                    <ProductSearchBtn type='submit' ><SearchOutlinedIcon sx={{color:'#929294'}}/></ProductSearchBtn>
                </label>
              </div> }
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