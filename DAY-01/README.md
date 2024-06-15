# Backend Tour - Day 01

[![Star on GitHub](https://img.shields.io/github/stars/suryamanipatra/BACKEND-TOUR.svg?style=social)](https://github.com/suryamanipatra/BACKEND-TOUR)

**Important:-** By seeing the size of readme you might have second thoughts but, to be honest, if you work from start you won't experience any problem and learn along the way.

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/suryamanipatra.byteiq@gmail.com)

## Contents
- [**Steps to Set Up Your Backend Project**](#steps-to-set-up-your-backend-project)
- [**Now Let's Learn How to Create Routes in Our Projects**](#now-lets-learn-how-to-create-routes-in-our-projects)
  - [**Now Define a POST Route for the /api/cars URL**](#now-define-a-post-route-for-the-apicars-url)
- [**Connecting to MongoDB with Mongoose**](#connecting-to-mongodb-with-mongoose)
  - [**Install Mongoose**](#install-mongoose)
  - [**Setting Up Mongoose Connection**](#setting-up-mongoose-connection)
- [**Give Feedback**](#give-feedback)




## Steps to Set Up Your Backend Project

### Step 1: Create a Folder
Create a new folder for your project.

### Step 2: Move into That Folder
Navigate into the folder using your terminal or command prompt.

```bash
cd your-folder-name
```

### Step 3: Initialize npm
Initialize npm with the `-y` flag to skip the setup questions.
```
npm init -y
```
### Step 4: Open Folder Using VS Code
Open your project folder in Visual Studio Code.
```
code .
```
### Step 5: Install Express
Install Express.js, a web application framework for Node.js.

```
npm install express
```
### Step 6: Create server.js
Create a file named server.js in the root of your project folder and add the following code:

```
const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Server Started at port no. ${port}`);
});
```
## How to Run Our Server
#### Now to run ur server open your terminal, go to the server.js file directory and run the following command.
```
node server.js
```
### If you want to see the response get from the server on browser, go to the URL `localhost:3000`:

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Let's Start our DAY-01 of Backend Tour");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server Started at port no. ${port}`);
});

```
### Now let's learn how to create Routes in our projects.

If you remember we have created one route before

```

app.get('/', (req, res) => {
    res.send("Let's Start our DAY-01 of Backend Tour");
});

```
### Now Define a `POST` route for the `/api/cars` URL.

```
app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send('Your car is loaded Successfully...');
});
```

If you run this you get an `error`. So to avoid it add a `Body Parser` `Middleware` Use body-parser to parse JSON data.

```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```

# Connecting to MongoDB with Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It simplifies the interaction between your Node.js application and MongoDB by providing a schema-based solution to model your data.

in our `node.js` data is in the form of `Objects` but in `MongoDB` our data in the form of `Documents`.

## Install Mongoose
```javascript
npm install mongoose
```

## Setting Up Mongoose Connection

To connect to a MongoDB database using Mongoose, you can use the following code snippet:
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connection Successfully...');
})
.catch((error) => {
    console.log('Received an Error...');
});
```
## Give Feedback

Did you find the tutorial to be a complete mess or did you have fun and learn something? Send in your thoughts directly to me or just create an issue. Feel free to ask you have some doubts.

I would love to hear about your experience with this tutorial. Hope you enjoyed learning. If you like it please give it an ⭐ on [GitHub](https://github.com/suryamanipatra/BACKEND-TOUR) my work.
