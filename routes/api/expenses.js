const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Expense = require('../../models/Expense');
const validateExpenseInput = require('../../validation/expense');


router.get('/', (req, res) => {
    Expense.find()
        .sort({ date: -1 })
        .then(expenses => res.json(expenses))
        .catch(err => res.status(404).json({ noexpensesfound: 'No expenses found' }));
});

router.get('/user/:user_id', (req, res) => {
    Expense.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(expenses => res.json(expenses))
        .catch(err =>
            res.status(404).json({ noexpensesfound: 'No expenses found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Expense.findById(req.params.id)
        .then(expense => res.json(expense))
        .catch(err =>
            res.status(404).json({ noexpensefound: 'No expense found with that ID' })
        );
});

router.post('/',
    (req, res) => {
       
        const newExpense = new Expense({
            category: req.body.category,
            amount: req.body.amount,
            date: req.body.date,
        });

        newExpense.save().then(expense => res.json(expense));
    }
);

router.delete('/delete',
    (req,res) => {
        
        Expense.findById(req.body.expense).then((expense)=> expense.delete()).then(()=> console.log(req.body.expense))
    }
)


module.exports = router;