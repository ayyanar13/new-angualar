const express = require('express')
const router = express.Router()
const user=require('../controller/user')
const rentals = require('../models/rental')

router.post('/auth', user.auth )
router.post('/register', user.register)
module.exports = router