const mongoose=require('mongoose');
//Schema -'S' used for class or constructor
const Schema=mongoose.Schema

const menuSchema=new Schema({
    name:{ type:String, required:true},
    image:{ type:String, required:true},
    price:{ type:Number, required:true},
    size:{ type:String, required:true},
})

module.exports = mongoose.model('Menu', menuSchema)