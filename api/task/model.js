const db = require('../../data/dbConfig');

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.*','p.project_name', 'p.project_description')
}


function postTask(newTask) {
    return db('tasks').insert(newTask)
        .then(([task_id])=> {
            return db('tasks').where('task_id', task_id)
        })
}

module.exports = {
    getTasks,
    postTask
}