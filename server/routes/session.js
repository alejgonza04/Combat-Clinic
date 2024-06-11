import express from 'express';
import { getSessions, addSession } from '../controllers/session.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getSessions);
router.post('/', addSession);

export default router;
