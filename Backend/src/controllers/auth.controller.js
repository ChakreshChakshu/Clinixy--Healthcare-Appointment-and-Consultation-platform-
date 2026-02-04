import AuthService from "../services/auth.service.js";
import PasswordUtils from "../utils/password.js";

export const register = async (req, res) =>{
    try {
        const {name, email, password} = req.body;

        const hashedPassword = await PasswordUtils.hashPassword(password);
        
        const newUser = await AuthService.registerUser(name, email, hashedPassword);
        
        return res.status(201).json({"register successful": newUser});

    } catch (error) {
        return res.status(400).json({"register failed": error.message});
    }
}
