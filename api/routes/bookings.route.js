import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controllers/booking.controller.js';
import { isAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', isAdmin, getAllBooking);

export default router;
