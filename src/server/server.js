const getProducts = require('./controllers/conectionApi')
require('./config/config');

const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/products/:product', async (req, res) => {
    try {
        const { product } = req.params;
        const products = await getProducts(product)
        return res.send(products)

    }
    catch (error) {
        res.status(400).json(console.log(error))
    }
});

app.listen(port, () => console.log(`Aplicación corriendo en el puerto ${port}`));
