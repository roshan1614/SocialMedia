import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import verifyToken from '../middleware/auth.js';
import router from './auth.js';
const route = express.Router();

// Read
router.get('/:id', verifyToken, getUser);
router.get('/:id/:friends', verifyToken, getUserFriends);

//Update
router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;
