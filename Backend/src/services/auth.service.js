import bcrypt from "bcryptjs"
import UserModel from "../models/User.model.js"
import { genrateAccessToken, genrateRefreshToken } from "../utils/jwt.js"
import PasswordUtils from "../utils/password.js"

export const loginService=async(email,password)=>{
 let user=await UserModel.findOne({email})
    if (!user) {
    throw new Error("Invailid User")
    }
    const hashPass=await PasswordUtils.comparePassword(password,user.password)

    if (!hashPass) {
    throw new Error("incorrect Password")
    }

    const AccessToken=await genrateAccessToken(user._id)
    const RefreshToken=await genrateRefreshToken(user._id)

    return {user,AccessToken,RefreshToken}

}

 const registerUser = async (name, email, password) => {


        const checkUser = await UserModel.findOne({ email: email });
        if (checkUser) {
            throw new Error("User already exists");
        }

        const user = await UserModel.create({ name, email, password });
        return user;

}
const AuthService = {
    registerUser,
};
export default AuthService;
