import User from '../models/user.model.js';

 const registerUser = async (name, email, password) => {


        const checkUser = await User.findOne({ email: email });
        if (checkUser) {
            throw new Error("User already exists");
        }

        const user = await User.create({ name, email, password });
        return user;

}
const AuthService = {
    registerUser,
};
export default AuthService;