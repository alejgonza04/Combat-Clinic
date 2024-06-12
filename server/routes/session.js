import express from 'express';
import { getSessions, addSession } from '../controllers/session.js';
import auth from '../middleware/auth.js';
import passport from 'passport';

const router = express.Router();

router.get('/:userEmail', auth, getSessions);
router.post('/:userEmail', auth, addSession);

export default router;
