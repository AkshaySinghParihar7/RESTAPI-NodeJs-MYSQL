const { body } = require("express-validator")

//Plan validations
const addPlanValidation = async (req) => {
    return (
        body('name').notEmpty().withMessage('Plan Name is required.'),
        body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number')
    )
}

module.exports = {
    addPlanValidation,
}