import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';

import { useState } from 'react';

import {authenticateSignup} from '../../service/api' ;

const Component = styled(Box)`

        height :70vh;
        width :90vh;
    `

const Image = styled(Box)`

        background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
        height: 81.7%;
        width: 30%;
        padding: 45px 39px;
        & > p ,h5{
            color:white;
            font-weight:600;
        }
    `
const Wrapper = styled(Box)`
    display: flex;
    flex-direction:column;
    padding: 25px;
    flex:1;

    & > div , & > button, & > p{
        margin-top: 20px
    }

`

const LoginButton = styled(Button)`
    text-transform:none;
    background: #FB641B;
    color: #fff;
    height: 48px;

`

const OTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`

const Create = styled(Typography)`
    font-size: 14px;
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer
`

const initalAccount = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
    email: '',
    phone: ''
};

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(initalAccount.login);
    const [signup, setSignup] = useState(signupInitialValues);

    const toggleSignup = () => {
        toggleAccount(initalAccount.signup);
    }
    // const toggleLogin = () =>{
    //     toggleAccount(initalAccount.login);
    // }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initalAccount.login);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
        
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        
        if(!response) return;
        handleClose();
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5"> Login </Typography>
                        <Typography style={{ marginTop: '20' }}>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </Image>

                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' label="Enter Mobilenumber/Email" />
                            <TextField variant='standard' label="Enter Password" />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <OTP>Request OTP</OTP>
                            <Create onClick={() => toggleSignup()}>New to Flipkart? Create an account</Create>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name = 'name' label="Enter Name" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name = 'username' label="Enter Username" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name = 'password' label="Enter Password" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name = 'email' label="Enter Email" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name = 'phone' label="Enter Phone" />
                            <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }

                </Box>
            </Component>
        </Dialog>


    )
}

export default LoginDialog;