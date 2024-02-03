const db = require('../models');
const response = require('../models/response');
const { validationResult } = require('express-validator');
const validation = require('../helpers/validations');

const Plan = db.plans;


const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll();
        response.status = true;
        response.message = "SUCCESS";
        response.data = plans;
        return response;
    } catch (error) {
        console.error('Error retrieving plans:', error);
        response.status = false;
        response.data = null;
        response.message = error.message;
        return response;
    }
};

const getPlanById = async (req, res) => {
    try {
        const { id } = req.params;
        let planData = await Plan.findOne({ where: { id: id } });

        if(!planData){
            response.status = false;
            response.message = "Plan not found";
            response.data = null;
            return response;
        }
        response.status = true;
        response.message = "SUCCESS";
        response.data = planData;
        return response;
    } catch (error) {
        console.error('Error retrieving plans:', error);
        response.status = false;
        response.data = null;
        response.message = error.message;
        return response;
    }
}

const addPlan = async (req, res) => {
    try {

        const { name, description, price, feature, isactive, trialdays, isdelete, duration } = req.body;
        const newPlan = await Plan.create(req.body);
        response.status = true;
        response.message = "SUCCESS";
        response.data = newPlan;
        return response;
    } catch (error) {
        console.error('Error retrieving plans:', error);
        response.status = false;
        response.data = null;
        response.message = error.message;
        return response;
    }
}

const updatePlan = async (req, res) => {
    try {
        const { id } = req.params;
        const existPlan = await Plan.findOne({ where: { id: id } });
        if (!existPlan) {
            response.status = false;
            response.message = "Plan not found";
            response.data = null;
            return response;
        }

        await existPlan.update(req.body);
        response.status = true;
        response.message = "Plan updated successfully";
        response.data = existPlan;
        return response;

    } catch (error) {
        console.error('Error retrieving plans:', error);
        response.status = false;
        response.data = null;
        response.message = error.message;
        return response;
    }
}

const deletePlan = async (req, res) => {
    try {
        const { id } = req.params;
        const existPlan = await Plan.findOne({ where: { id: id } });

        if (!existPlan) {
            response.status = false;
            response.message = "Plan not found";
            response.data = null;
            return response;
        }
        await existPlan.destroy();

        response.status = true;
        response.message = "Plan deleted successfully";
        response.data = null;
        return response;

    } catch (error) {
        console.error('Error retrieving plans:', error);
        response.status = false;
        response.data = null;
        response.message = error.message;
        return response;
    }
}

module.exports = {
    getAllPlans,
    getPlanById,
    addPlan,
    updatePlan,
    deletePlan
}