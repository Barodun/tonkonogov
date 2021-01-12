const {Router} = require('express')
const Days = require('../models/days')
const router = Router()

router.get('/', async (req, res) => {
    const days = await Days.find({})
    res.render('index', {
        days
    })
})

module.exports = router