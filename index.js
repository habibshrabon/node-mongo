const express = require('express');


const app = express();

const users = ['Jabir', 'Lopa', 'Fatema', 'Mim', 'Reza']

app.get('/', (req, res) => {
    res.send("I have another idea");
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price:10000});
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name})
})


app.listen(4200, () => console.log('Listening to port 4200'));