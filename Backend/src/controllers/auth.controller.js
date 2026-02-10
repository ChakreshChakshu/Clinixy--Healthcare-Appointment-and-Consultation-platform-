
import { loginService } from "../services/auth.service.js"
import { loginValidation } from "../validators/auth.validation.js"

export const Login =async(req,res)=> {
try {
    const {email,password}=req.body
    const {error}=loginValidation(req.body)
    if (error) {
        return res.status(401).json({message:error})
    }

const data=await loginService(email,password)

    

    res.cookie("Refreshtoken",data.Refreshtoken,{
        httpOny:true,
        secure:false,
        sameSite:"lax",
        maxAge:7*24*60*60*1000
    })

    return res.status(200).json({message:"Login Succesfull","accessToken":data.Accesstoken})
    
} catch (error) {
    return res.status(500).json({message:"Server Error"})
}
}