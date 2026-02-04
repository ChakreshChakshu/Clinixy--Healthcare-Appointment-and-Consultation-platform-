import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    const salt = 10;
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

const PasswordUtils = {
    hashPassword,
    comparePassword,
}

export default PasswordUtils;
