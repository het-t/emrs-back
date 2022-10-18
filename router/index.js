import express from 'express'

import loginController from '../controller/loginController.js'

import getRecordFields from '../controller/getRecordFields.js'
import createRecordField from '../controller/createRecordField.js'

import createRecord from '../controller/createRecord.js'

import getUpcomings from '../controller/getUpcomings.js'
import getRecordHistory from '../controller/getRecordHistory.js'

import getConnections from '../controller/getConnections.js'

import auth from '../controller/auth.js'

const router = express.Router()

router.post('/login', loginController)

router.get('/u/record', auth, getRecordFields)
router.get('/u/create-field', auth, createRecordField)

router.post('/u/create-record', auth, createRecord)

router.get('/u/connections', auth, getConnections)

router.get('/u/upcomings', auth, getUpcomings)
router.get('/u/upcomings/edit', auth, getRecordHistory)

export default router 