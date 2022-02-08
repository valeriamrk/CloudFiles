import { Router } from "express";
import fileController from '../controllers/fileController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router();

router.post('/createdir', fileController.createDir)
router.get('/getFiles', fileController.getFiles)
router.get('/deleteFolder', fileController.deleteFolder)
router.get('/renameFolder', fileController.renameFolder)



// router.post('/createdir', authMiddleware, fileController.createDir)
// router.get('/getFiles', authMiddleware, fileController.getFiles)
// router.get('/deleteFolder', authMiddleware, fileController.deleteFolder)
// router.get('/renameFolder', authMiddleware, fileController.renameFolder)

export default router