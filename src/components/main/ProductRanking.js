import styled from 'styled-components'
import ProductBox from '../ProductBox';
import TapBar from '../TapBar';
import RankingImg from '../../assets/Fairytale.png';

const ProductRanking = () => {

    return (
        <>
        <ProductRankingBox>
            <div style={{display:'flex', margin:'20px 10px', alignItems:'center'}}>
                <div style={{flex:'1', fontSize: '20px', fontWeight: '600',}}>인기 상품</div>
                <div style={{color:'#B4B4B4', fontSize: '15px'}}> 더보기&gt;&gt; </div>
            </div>
            <ProductRaingkBlock>
                <Label>
                    <ProductBox/>
                    <img src={RankingImg} alt="1위" style={{position:'absolute', bottom:'140px',left:'120px'}}/>
                    <Ranking>1위</Ranking>
                </Label>
                <Label>
                    <ProductBox/>
                    <Ranking>2위</Ranking>
                </Label>
            </ProductRaingkBlock>

            <ProductRaingkBlock>
                <Label>
                    <ProductBox/>
                    <Ranking>3위</Ranking>
                </Label>
                <Label>
                    <ProductBox/>
                    <Ranking>4위</Ranking>
                </Label>
            </ProductRaingkBlock>

            <hr style={{border:'solid 30px #FFF'}}/>
            <TapBar/>
        </ProductRankingBox>
        </>
    )
}

export default ProductRanking;

const ProductRankingBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
}`;

const ProductRaingkBlock = styled.div`
display:flex;
justify-content: space-around;
margin-left: 5px;
`;

const Label = styled.label`
position:relative;
`;

const Ranking = styled.b`
position: absolute;
bottom: 145px;
left: 130px
`;