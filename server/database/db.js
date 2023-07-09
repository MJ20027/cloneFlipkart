import mongoose from "mongoose";
export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce.g3lf5qz.mongodb.net/?retryWrites=true&w=majority`;
    try{
      await  mongoose.connect(URL, {useUnifiedTopology: true, usenewUrlParser:true});
      console.log("database connected");
        
        
    } catch(error){
        console.log('there is  error', error.message);
    }
}

export default Connection;