const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next)=> {
    return Resource.getResources()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
})

router.post('/', (req, res, next)=> {
    Resource.postResource(req.body)
        .then(newResource => {
            console.log(newResource)
            res.status(201).json(newResource[0]);
        })
        .catch(next);
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
