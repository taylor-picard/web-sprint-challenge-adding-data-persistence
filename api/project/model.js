const db = require('../../data/dbConfig');

function getProjects() {
    return db('projects')
}
function postProject(newProject){
    return db('projects').insert(newProject)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id)
        })
}

 module.exports = {
    getProjects,
    postProject
}