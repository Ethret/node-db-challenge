const express = require('express');

const db = require('./projectModals');

const router = express.Router();

router.get('/resources', (req,res) => {
    db.getResources()
        .then(resources => {
            res.status(200).json({resources})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not retrieve a list of resources'})
        })
})

router.post('/resources', (req, res) => {
    const body = req.body;

    db.addResources(body)
        .then(resource => {
            res.status(201).json({resource})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not post resources'})
        })
})

router.post('/projects', (req,res) => {
    const body = req.body;
    db.addProject(body)
        .then(project => {
            res.status(201).json({project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not post project'})
        })
})

router.get('/projects', (req,res) => {
    db.getProject()
        .then(project => {
            res.status(200).json({project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get projects'})
        })
})

router.post('/tasks', (req,res) => {
    const body = req.body
    db.addTask(body)
        .then(task => {
            res.status(201).json({task})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not post task'})
        })
})

router.get('/tasks', (req,res) => {
    const id = req.params.id;
    db.getTasks(id)
        .then(task => {
            res.status(200).json({task})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get list of tasks'})
        })
})

module.exports = router;
