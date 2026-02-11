import jwt from "jsonwebtoken"
export const genrateAccessToken=async(userId)=>{
const token=jwt.sign({userId},process.env.ACCESS_SECRET_KEY,{expiresIn:"15m"})
console.log("token",token);

return token
}
export const genrateRefreshToken=async(userId)=>{
const token=jwt.sign({userId},process.env.REFRESH_SECRET_KEY,{expiresIn:"7d"})
console.log("token",token);

return token
}