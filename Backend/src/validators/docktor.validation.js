
export const validateDoctor = (req, res, next) => {
    const { name, email, password, specialization, clinicId, education, discription, experienceYears } = req.body;

    if (!name || !email || !password || !clinicId || !specialization || !education || !discription || !experienceYears) {
        return res.status(400).json({ "validation error": "All fields are required" });
    }

    if(name.length<3){
        return res.status(400).json({message: "name < 3"})
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email format is wrong" });
    }

     const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
        return res.status(400).json({ 
            message: "Password weak hai! Password must be at least 8 characters long, include an uppercase letter, a number, and a special character (@$!%*?&)." 
        });
    }

    if (!Array.isArray(clinicId) || clinicId.length === 0) {
        return res.status(400).json({ message: "clinicId must be an array and cannot be empty" })
    }

    if (!Array.isArray(specialization) || specialization.length === 0) {
        return res.status(400).json({ message: "specialization must be an array"});
    }

    next();
}