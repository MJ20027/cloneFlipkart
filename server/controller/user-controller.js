import User from '../model/userSchema.js';


export const userSignUp = async(request , response) =>{
    try{

        const ex = await User.findOne({ username: request.body.username });
        if(ex==true){
            return response.status(401).json({message: 'user exist already'});
        }
        // console.log(request.body);
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message: user});

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}