const express = require('express'); 
const mongoose = require('mongoose'); 
const {Schema} = mongoose; 

const app = express(); 
let PORT = 8080; 

let daaruSchema = new Schema({
    name : {type: String, required: true, trim: true}, 
    year : {type: Number}, 
    price : {type: Number, required: true}, 
    hasTried : Boolean
}); 

const Daaru = mongoose.model('Daaru', daaruSchema);        // this creates daarus collection in 
// model is js class -> objects -> db 

let royalStag = new Daaru({name: "royal stag", price: 350, year: 1960, hasTried: false})
console.log(Daaru, 'my model'); 
royalStag.save(); 

console.log(royalStag); 

mongoose.connect('mongodb://127.0.0.1:27017/cheerz')      
.then( ()=>{console.log("DB connected")})
.catch((err)=>console.log(err)); 

app.listen(PORT, ()=>{
    console.log('server is running at port', PORT); 
})


