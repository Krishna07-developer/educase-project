import { User } from '../modals/authModal.js';
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerController = async (req,res)=>{
    const {fullname,phonenumber,emailaddress,password,agency,companyname} = req.body;

    try {
        const existedUser = await User.findOne({emailaddress})

        if(existedUser){
            return res.status(400).json({error : 'Email already used'})
        }

        const hashedPassword = bcryptjs.hashSync(password,10);

        const newUser = await User.create({
            fullname,
            phonenumber,
            emailaddress,
            password : hashedPassword,
            agency,
            companyname
        })

        res.status(200).json({
            success : true,
            newUser
        })
    } catch (error) {
        console.log('Error registering user', error);
        res.status(500).json({error : 'Internal server error'})
    }
}

export const loginController = async (req,res)=>{
    const {emailaddress,password} = req.body

    try {
        const validUser = await User.findOne({emailaddress});
        if(!validUser){
            return res.status(404).json({error : 'User not found!'})
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if(!validPassword){
            return res.status(401).json({error : 'Wrong Credentials!'})
        }


        const token = jwt.sign({id : validUser._id},process.env.JWT_SECRET)
        const {password : pass,...rest} = validUser._doc;
        res.cookie('access_token' , token , {httpOnly : true}).status(200).json(rest)


    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Internal server error'})
    }

}



export const signout = async (req,res)=>{
    try {
        res.clearCookie("access_token");
        res.status(200).json('User has been logged out!')
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal Server Error')
    }
}