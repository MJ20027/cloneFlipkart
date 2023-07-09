import { Box ,styled} from "@mui/material";
import Banner from "./home/Banner";
import NavBar from "./home/NavBar";

const Component = styled(Box)`
padding: 10px 10px;
background: #F2F2F2
`

const Home = () =>{
    return(
        <>
        <NavBar/>
        <Component>
            <Banner/>
        </Component>
        </> 
    )


}

export default Home;