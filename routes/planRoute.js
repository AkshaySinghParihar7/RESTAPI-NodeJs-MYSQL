const express = require('express');
const planController = require('../controller/planController');
const route = express.Router();

route.get('/', async (req, res) =>{
    const planData = await planController.getAllPlans();
    res.json(planData);
});

module.exports = route;