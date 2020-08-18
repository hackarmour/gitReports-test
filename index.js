const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: Axios } = require('axios');
const KEY = require('./secret');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', async (req, res, next) => {
    const {name, age, filename} = req.body;
    await Axios.get('https://api.github.com/repos/hackarmour/reportsDB', {
        headers: {'Authorization': "token " + KEY}
    })
        .then(data => {
            res.send(data.data)
        }).catch(e => {
            res.send(e)
        })
})


app.listen(4000, () => {
    console.log('Example app listening on port 4000');
});