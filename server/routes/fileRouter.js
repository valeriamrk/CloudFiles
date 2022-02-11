import { Router } from "express";
import fileController from '../controllers/fileController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router();

router.post('/createdir', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFile)
router.get('/getFiles', fileController.getFiles)
// router.get('/getFiles', authMiddleware, fileController.getFiles)
router.delete('/', authMiddleware, fileController.deleteFolder)
router.get('/renameFolder', authMiddleware, fileController.renameFolder)


export default router