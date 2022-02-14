import { Router } from "express";
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import config from 'config'
import jwt from 'jsonwebtoken'
import { check, validationResult } from "express-validator";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();


router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/auth', authMiddleware, authController.auth)


export default router;