import AuthService from "../services/auth.service.js";
import PasswordUtils from "../utils/password.js";
import { loginService } from "../services/auth.service.js"
import { loginValidation } from "../validators/auth.validation.js";

export const Login =async(req,res,next)=> {
try {
    console.log("inside login");
    const {email,password}=req.body
const data=await loginService(email,password)

    

    res.cookie("RefreshToken",data.RefreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge:7*24*60*60*1000
    })

    return res.status(200).json({message:"Login Succesfull",accessToken:data.AccessToken})
    
} catch (error) {
    next(error)
}
}


export const register = async (req, res,next) =>{
    try {
        const {name, email, password} = req.body;

        const hashedPassword = await PasswordUtils.hashPassword(password);
        
        const newUser = await AuthService.registerUser(name, email, hashedPassword);
        
        return res.status(201).json({"register successful": newUser});

    } catch (error) {
        next(error)
        // return res.status(400).json({"register failed": error.message});
    }
}
