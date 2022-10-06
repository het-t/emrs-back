import express from 'express'

import loginController from '../controller/loginController.js'

import getRecordFields from '../controller/getRecordFields.js'
import createRecordField from '../controller/createRecordField.js'

import createRecord from '../controller/createRecord.js'

import auth from '../controller/auth.js'

const router = express.Router()

router.post('/login', loginController)

router.get('/u/record', auth, getRecordFields)
router.get('/u/create-field', auth, createRecordField)

router.post('/u/create-record', auth, createRecord)

export default router 