const Calculator = require('../libraries/Calculator');
let myCalc = new Calculator()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = myCalc.multiply(number1, number2)
    console.log(product)
    res.status(200)
    res.json({result:product})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = myCalc.subtract(number1, number2)
    console.log(difference)
    res.status(200)
    res.json({result:difference})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let fraction = myCalc.divide(number1, number2)
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})
}

module.exports = {
    addNumbers, multiplyNumbers, subtractNumbers, divideNumbers
}