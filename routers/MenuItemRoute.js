const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const menuItem = require('../models/menuItem')


//POST method to store menu Items
router.post('/', async(req,res)=>{
    try{
        const newItem = new menuItem(req.body);
        const response = newItem.save();
        console.log("Data saved successfully");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

//GET Method API to list down menus
router.get('/',async(req,res)=>{
    try{
        const itemList = await menuItem.find();
        console.log("Data fetched");
        res.status(200).json(itemList);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.get('/:taste', async(req,res)=>{
    try{
        const tastetype = req.params.taste;
        if(tastetype=="chef"||tastetype=="manager"||tastetype=="waiter"){
            const response = await Person.find({taste:tastetype});
            res.status(200).json(response);
        }else{
            res.status(401).json({error:'Invalid taste type'});
        }
    }catch(error){
        res.status(500).json({error:"Internal server error"});
    }
});

module.exports = router;