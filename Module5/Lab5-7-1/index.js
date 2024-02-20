const express = require('express')
const productsRoutes = require('./routes/productsRoutes');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// map the products routes to our app
app.use('/products', productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
