
export const validateRegister = (req, res, next) =>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    if(name.length < 3){
        return res.status(400).json({message: "Name must be at least 3 characters"});
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address format" });
    }

    if(password.length < 6){
        return res.status(400).json({message: "Password must be at least 6 characters"});
    }
    next();
}
