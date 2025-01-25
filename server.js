const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const personRoute = require('./routers/PersonRoute');
const menuItemRoute = require('./routers/MenuItemRoute');


const app=express();
const port = 3000;
app.use(bodyParser.json()); //Processes the request body in the required format before it hits the route. Accessed by req.body

app.get('/',(req,res)=>{
    res.send("Hey! Welcome to Hotel DBMS");
});

app.use("/person",personRoute);
app.use("/menu",menuItemRoute);

app.listen(port,()=>{
    console.log("Server is listening on port 3000");
})