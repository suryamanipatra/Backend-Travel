//step-1: create a folder
// step2: move into that folder
// step3: npm inti -y
// step4: open folder using VS Code
// step5: npm i express
// step6: create server.js

const express = require('express');
const app = express();

// Used to parse req.body in express -> Specially use in PUT or POST
const bodyParser = require('body-parser');
// Specifically parse JSON data & add it to the request.Body object.
app.use(bodyParser.json());


app.get('/',(req,res) => {
    res.send("Let's Start our DAY-01 of Backend Tour")
})

app.post('/api/cars',(req,res) => {
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send('Your car is loaded Successfully...')
})
const port = 3000
app.listen(port,()=>{
    console.log(`Server Started at port no. ${port}`)
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log('Connection Successfully...')})
.catch((error) =>{console.log("Recieved an Error...")})
