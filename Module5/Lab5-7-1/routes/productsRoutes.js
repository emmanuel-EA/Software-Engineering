const express = require('express');
const productsController = require('../controllers/productsController')
const router = express.Router();
 
// new route for getting all products 
router.get('/', (req, res) => {
    productsController.getProducts(req, res)
})

module.exports = router;