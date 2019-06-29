const conectionApi = require('./controllers/conectionApi')
require('./config/config');
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080

//Middleware
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.get('/:id/description', async (req, res) => {
    debugger
    try {
        const { id } = req.params;
        const description = await conectionApi.getDescription(id)
        return res.send(description)
    }
    catch (error) {
        res.status(400).json(console.log(error))
    }
})
app.get('/products/:product', async (req, res) => {
    try {
        const { product } = req.params;
        const products = await conectionApi.getProducts(product)
        debugger
        return res.send(products)

    }
    catch (error) {
        res.status(400).json(console.log(error))
    }
});


app.listen(port, () => console.log(`Aplicación corriendo en el puerto ${port}`));
