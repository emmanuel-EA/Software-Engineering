const axios = require('axios')

const getProducts = (req, res) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => res.status(200).json(response.data))
        .catch(error => res.status(500).json({error: error.message}))
}

module.exports = {
    getProducts
}