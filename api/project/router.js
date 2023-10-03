const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next)=> {
    Project.getProjects()
        .then(projs => {
            projs.forEach(project => {
                if(project.project_completed === 1){
                    project.project_completed = true;
                }else{
                    project.project_completed = false;
                }
            })
            res.status(200).json(projs)
        })
        .catch(next)
})

router.post('/', (req, res, next)=> {
    Project.postProject(req.body)
        .then(newProject => {
            newProject.forEach(project => {
                if(project.project_completed === 1){
                    project.project_completed = true;
                }else{
                    project.project_completed = false;
                }
            })
            res.status(201).json(newProject[0])
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