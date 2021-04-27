const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateExpenseInput(data) {
    let errors = {};


    data.category = validText(data.text) ? data.text : '';

    if (!Validator.isLength(data.category, { min: 1, max: 30 })) {
        errors.text = 'Category must be between 1 and 30 characters';
    }

    if (Validator.isEmpty(data.category)) {
        errors.text = 'Category field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};