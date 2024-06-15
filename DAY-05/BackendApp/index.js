const express = require("express");
const app = express();

const PORT = 3000;
 
app.listen(PORT, () => {
    console.log('app started...')
});

// adding middleware

app.use(express.json());

// routes

app.get("/", (req,res) => {
    res.send(`<h1>This is my Get route...</h1>`)
})

app.post("/cars", (req,res) => {
    res.send("Recieved a post message...")
})

