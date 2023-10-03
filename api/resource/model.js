const db = require('../../data/dbConfig');

function getResources() {
    return db('resources')
}
function postResource(newResource) {
    return db('resources').insert(newResource)
        .then(([resource_id])=> {
            return db('resources').where('resource_id', resource_id)
        })
}

module.exports = {
    getResources,
    postResource
}