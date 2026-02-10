import bcrypt from "bcryptjs"
import UserModel from "../models/User.model.js"
import { genrateAccessToken, genrateRefreshToken } from "../utils/jwt.js"

export const loginService=async(email,password)=>{
 let user=await UserModel.findOne({email})
    if (!user) {
    return res.status(400).json({message:"Invailid User"})
    }
    const hashPass=await bcrypt.compare(password,user.password)
    if (!hashPass) {
    return res.status(400).json({message:"incorrect Password"})
    }
    const Accesstoken=await genrateAccessToken(user._id)
    const Refreshtoken=await genrateRefreshToken(user._id)

    return {user,Accesstoken,Refreshtoken}

}