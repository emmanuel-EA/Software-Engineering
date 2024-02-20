const express = require('express');
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();
 
// new route for adding two numbers
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res)
})

// new route for subtracting two numbers
router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res)
})

// new route for dividing two numbers
router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})

// new route for multiplying two numbers
router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res)
})

module.exports = router;