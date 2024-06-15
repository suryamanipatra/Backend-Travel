 
// const express = require('express')
// const app = express();

// app.listen(3000, () => {
//     console.log("App is running Successfully...")
// })

const express = require("express");
const app = express();

// load confing from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT, ()=>{
    console.log(`Server started Successfully at ${PORT}`)
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res) => {
    res.send(`<h1> This is our DAY 02 Of Backend Tour</h1>`)
})
