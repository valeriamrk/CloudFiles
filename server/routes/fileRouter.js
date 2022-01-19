import { Router } from "express";
import fileController from '../controllers/fileController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router();

router.post('', authMiddleware, fileController.createDir)
router.get('', authMiddleware, fileController.getFiles)

export default router