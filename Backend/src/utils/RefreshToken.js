import jwt from "jsonwebtoken"
import { genrateAccessToken } from "./jwt"
export const RefreshToken=async(req,res)=>{
    try {
        const RefreshToken=req.cookies.RefreshToken
        if (!RefreshToken) {
     return res.status(401).json({message:"No Access Token"})   
        }

        const token =await jwt.verify(RefreshToken,process.env.REFRESH_SECRET_KEY)
        const newAccessToken=await genrateAccessToken(token.userId)
        return res.status(200).json({"AccessToken":newAccessToken})

    } catch (error) {
        console.log(error);
     return res.status(401).json({message:"Token not found"})   
    }
}