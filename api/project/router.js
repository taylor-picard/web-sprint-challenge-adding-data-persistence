const router = require('express').Router();


router.use('*', (req, res)=> {
    res.status(200).json({
        message: 'API reached!'
    })
})
router.use((err, req, res)=> {
    res.status(500).json({
        message: err.message
    })
})

module.exports = router;