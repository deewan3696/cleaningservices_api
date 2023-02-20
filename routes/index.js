const express = require('express')
const router= express.Router()
const {booking} = require('../controllers/booking')




router.post('/book',booking)




module.exports = router