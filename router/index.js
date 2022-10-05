import express from 'express'

import loginController from '../controller/loginController.js'
import getRecordFields from '../controller/getRecordFields.js'
import auth from '../controller/auth.js'

const router = express.Router()

router.post('/login', loginController)
router.get('/u/record', auth, getRecordFields)

export default router 