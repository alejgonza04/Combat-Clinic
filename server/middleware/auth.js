
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(403).json({ message: "No token provided" });

        const decodedData = jwt.verify(token, process.env.JWT_SECRET || 'fa74e12b57f8da3e73af3d43cd4bba46378d9096a745ace0ab3325a7bf2a346a');
        req.user = { email: decodedData.email }; // Attach the email to req.user
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
}

export default auth;
