
import { AppBar , Box, Toolbar, Typography ,styled } from '@mui/material';


// component
import Search from './Search';
import CustomButtons from './CustomButtons';
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 12px;
    text-align:center;
    font-style: italic;
`

const PlusImg = styled('img')({
    width:10,
    height:10,
    marginLeft:2

})


const ButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`



const Header = () =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyledHeader>  
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logoURL} style={{width: 75}} alt='logo'/>
                    <Box style={{display:"flex"}}>
                        <SubHeading>Explore &nbsp;
                            <Box component="span" style={{color:"yellow"}}>Plus</Box>
                        </SubHeading>
                        <PlusImg src={subURL} alt='url'/>
                    </Box>
                </Component>
                <Search/>
                <ButtonWrapper>
                    <CustomButtons/>
                </ButtonWrapper>
            </Toolbar>
        </StyledHeader>

    )
}

export default Header;