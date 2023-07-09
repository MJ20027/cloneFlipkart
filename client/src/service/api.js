

import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) =>{
    try{
        return await axios.post(`${URL}/signup`, data);


    }catch (error){
        console.log("there i s a error in backend" , error);
    }
}