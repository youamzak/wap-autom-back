const router = require('express').Router()
const upload = require('../middleware/upload.middleware')
const uploadController = require('../controllers/upload.controller')

router.post('/single/:id',upload.single('upload'), uploadController.single)
router.post('/multiple/:id',upload.array('uploads', 5), uploadController.multiple)

module.exports = router