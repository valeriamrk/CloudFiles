import { Router } from "express";
import fileController from '../controllers/fileController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router();

router.post('/createdir', authMiddleware, fileController.createDir)
router.get('/getAllFiles', authMiddleware, fileController.getAllFiles)


router.post('/upload', authMiddleware, fileController.uploadFile)
router.delete('/', authMiddleware, fileController.deleteFile)
router.get('/renameFolder', authMiddleware, fileController.renameFolder)


export default router