const db = require('../data/dbConfig');

module.exports = {
    getResources,
    addResources,
    getProject,
    addProject,
    getTasks,
    addTask
}

function getResources() {
    return db('resources')
    .select('id', 'name', 'description')
}

function addResources(resource) {
    return db('resources')
        .insert(resource)
}

function getProject() {
    return db('projects');
}

function addProject(project) {
    return db('projects')
        .insert(project)
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}

function getTasks() {
    return db
        .select('tasks.*', 'projects.name as ProjectName', 'projects.description as ProjectDescription')
        .from('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id');
}
