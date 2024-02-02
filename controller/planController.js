const db = require('../models');
const response = require('../models/response');

const Plan = db.plans;


const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll();
        response.status = true;
        response.message = "";
        response.data = plans;
        return response;
    } catch (error) {
        console.error('Error retrieving plans:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

const getPlanById = async (req, res) => {
    const { id } = req.params;
    let planData = await Plan.find({ where: { id: id } });
    res.status(200).send(planData);
}

module.exports = {
    getAllPlans
}