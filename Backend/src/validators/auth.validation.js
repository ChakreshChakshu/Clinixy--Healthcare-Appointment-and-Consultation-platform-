export const loginValidation=(data)=>{
    const {email,password}=data
if (!email) {
        return {error:"Email is required"}
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
        return {error:"invailid Email format"}
}
if (!password) {
        return {error:"Password is required"}
}
if (password.length<6) {
        return {error:"Password must be at least 6 characters"}
}
return {error:null}
}

export const validateRegister = (data) =>{
    const {name, email, password} = data;

    if(!name || !email || !password){
        return {error:"All fields are required"}
    }

    if(name.length < 3){
            return {error:"Name must be at least 3 characters"}
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
            return {error:"Invalid email address format"}
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
        return res.status(400).json({ 
            message: "Password weak hai! Password must be at least 8 characters long, include an uppercase letter, a number, and a special character (@$!%*?&)." 
        });
    }
    return {error:null}
}
