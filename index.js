const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: Axios } = require('axios');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', async (req, res, next) => {
    const {name, age, filename} = req.body
    await Axios
})


app.listen(4000, () => {
    console.log('Example app listening on port 4000');
});

// 4e648b212883796f4a43952940d3644c6090b64d