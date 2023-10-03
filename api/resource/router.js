const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next)=> {
    return Resource.getResources()
        .then(res => {
            res.status(200).json(res)
        })
        .catch(next)
})

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
