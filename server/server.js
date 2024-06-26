import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import sessionRoutes from './routes/session.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://combatclinic.netlify.app' // Allow requests from this origin
   }));
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/addsession', sessionRoutes); 
app.use('/sessions', sessionRoutes); 
app.use('/user', userRoutes);

const startServer = async () => {
    try {

        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, error: 'Invalid session data' });
        } else if (error.name === 'MongoError' && error.code === 11000) {
            return res.status(400).json({ success: false, error: 'Duplicate session data' });
        } else {
            return res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
}

startServer();
