require('./config/config');

const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    const carito = {
        "contextura": "rellenita",
        "nacionalidad": "venezolana",
        "hobbies": "leer",
        "edad": 37,
        "url": "/"
    }
    res.json(carito);
});

app.listen(port, () => console.log(`Aplicación corriendo en el puerto ${port}`));