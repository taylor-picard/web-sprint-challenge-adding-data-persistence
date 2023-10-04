const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res, next)=> {
    Task.getTasks()
        .then(tasks => {
            tasks.forEach(task => {
                if(task.task_completed === 1){
                    task.task_completed = true;
                }else{
                    task.task_completed = false;
                }
            })
            res.status(200).json(tasks)
        })
        .catch(next)
            
})

router.post('/', (req, res, next)=> {
    Task.postTask(req.body)
    .then(newTask => {
        newTask.forEach(task => {
            if(task.task_completed === 1){
                task.task_completed = true;
            }else{
                task.task_completed = false;
            }
        })
        res.status(201).json(newTask[0])
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
