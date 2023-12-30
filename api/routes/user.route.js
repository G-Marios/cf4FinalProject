import express from 'express';
import { updateUser, deleteUser, getOneUser, getAllUser } from '../controllers/user.controller.js';

import { verifyUser, isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/:id', verifyUser, getOneUser);
router.get('/', isAdmin, getAllUser);

export default router;
