const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Jabir', 'Lopa', 'Fatema', 'Mim', 'Reza']

app.get('/', (req, res) => {
    res.send("I have another idea and best");
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price:10000});
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name})
})


//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 44;
    res.send(req.body);
})

app.listen(4200, () => console.log('Listening to port 4200'));