import jwt from "jsonwebtoken"
export const genrateAccessToken=async(userId)=>{
const token=jwt.sign({userId},process.env.REFRESH_SECRET_KEY,{expiresIn:"15m"})
return token
}
export const genrateRefreshToken=async(userId)=>{
const token=jwt.sign({userId},process.env.ACCESS_SECRET_KEY,{expiresIn:"7d"})
return token
}