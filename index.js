const express = require('express');
const app = express();
const port = 3000;
const jwt = require('./services/jwt.ts');
const planRoute = require('./routes/planRoute.js');

app.use(express.json());

app.use('/api/plans',jwt.authenticateToken,planRoute);

app.get('/', jwt.authenticateToken, (req, res) =>{
    res.send('Hello World!');
})

app.post('/', (req, res) =>{
    console.log(req.body);
    const response =  jwt.generateToken(req.body.email);
    console.log(response);
    res.json(response);
})

app.listen(port, () => console.log(`My app listening on port ${port}!`));