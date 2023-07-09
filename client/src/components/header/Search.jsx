import { InputBase ,Box , styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const SearchContainer = styled(Box)`
    background: white;
    width:30%;
    border-radius:5px;
    margin-left: 9px;
    display:flex;

`

const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left:15px;


`

const SearchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
`



const Search = () => {
    return(
        <SearchContainer>
            <InputSearchBase placeholder="Search For Products"/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
)
}

export default Search;