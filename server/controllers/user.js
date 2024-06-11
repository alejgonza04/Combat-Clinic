import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET_KEY = process.env.JWT_SECRET || 'fa74e12b57f8da3e73af3d43cd4bba46378d9096a745ace0ab3325a7bf2a346a'; // use environment variable for the secret key

export const signin = async (req, res) => {
    console.log('Signin request received');
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password); 
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
    console.log('Signin request processed');
}

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ name, email, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id}, SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}
