const express = require('express')
const app = express();  
const path = require('path')            // no need to install already present in node 


app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))   

let randomNum = Math.floor(Math.random()*44+4); 

let arr = ['morni', 'banke', 'kithe', 'chaliye']

app.get('/page1', (req, res)=>{
    res.render('index')
})
app.get('/page2', (req, res)=>{
    res.render('rondu', {randomNum})   // passing values in obj 
})

app.get('/page3', (req, res)=>{
    res.render('task', {arr}) 
})                                 
                                 
app.listen(8080, ()=>{
    console.log('server listening to port 8080')
})







