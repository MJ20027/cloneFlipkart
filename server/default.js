import { products } from "./constants/data.js"


import Product from "./model/product-schema.js";

const DefaultData = async() => {
    try{
        await Product.insertMany(products);
        console.log("successfully data entered");
    }catch(error){
        console.log('error occured' , error.message);
    }
}

export default DefaultData;