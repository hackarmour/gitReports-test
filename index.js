const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: Axios } = require('axios');
const KEY = require('./secret/secret');
const Base64 = require('base-64');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', async (req, res, next) => {
    const {name, age, filename} = req.body;   //  No file extention required !
    const data = JSON.stringify({name, age})
    const encoded = Base64.encode(data)
    await Axios.put("https://api.github.com/repos/hackarmour/reportsDB/contents/"+filename+".json", {
        message: "boooyeah",
        content: encoded
    }, {
        headers: {'Authorization': "token " + KEY}
    })
        .then(data => {
            res.send(data.data)
        }).catch(e => {
            res.send(e)
        })
})

app.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    await Axios.get('https://api.github.com/repos/hackarmour/reportsDB/contents/'+id+'.json', {
        headers: {'Authorization': "token "+ KEY}
    }).then((result) => {
        const content = result.data.content;
        const final = JSON.parse(Base64.decode(content))
        return res.json(final);
    })
})



app.listen(4000, () => {
    console.log('Example app listening on port 4000');
});