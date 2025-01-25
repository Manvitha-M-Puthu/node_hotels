const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type:[String],
        defualt:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});

const menuItem = mongoose.model('menuItem',menuSchema);

module.exports=menuItem;