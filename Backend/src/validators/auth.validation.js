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
if (password.length>6) {
 return {error:"Password must be at least 6 characters"}
}
return null

}