const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Person = require('../models/Person');

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
        const data = req.body; //Assuming the Request body contains person data

        //Create a new Person Document using Mongoose model
        const newPerson = new Person(data); //Alternate, after defining object, define one by one,i.e., newPerson.name = data.name,etc
        
        //Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

//GET Method to get the person
router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=="chef"||workType=="manager"||workType=="waiter"){
            const response = await Person.find({work:workType});
            res.status(200).json(response);
        }else{
            res.status(401).json({error:'Invalid work type'});
        }
    }catch(error){
        res.status(500).json({error:"Internal server error"});
    }
});

module.exports = router;