const express = require('express');
const planController = require('../controller/planController');
const route = express.Router();

route.get('/', async (req, res) => {
    const planData = await planController.getAllPlans();
    res.json(planData);
});

route.get('/:id', async (req, res) => {
    const planData = await planController.getPlanById(req, res);
    res.json(planData);
});

route.post('/', async (req, res) => {
    const planData = await planController.addPlan(req, res);
    res.json(planData);
});

route.patch('/:id', async (req, res) => {
    const planData = await planController.updatePlan(req, res);
    res.json(planData);
});

route.delete('/:id', async (req, res) => {
    const planData = await planController.deletePlan(req, res);
    res.json(planData);
});

module.exports = route;