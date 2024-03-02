
const express = require('express')
const app = express();  
const path = require('path')            // no need to install already present in node 


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))   
app.use(express.static(path.join(__dirname, 'public')))






let randomNum = Math.floor(Math.random()*44+4); 

let arr = ['morni', 'banke', 'kithe', 'chaliye']

app.get('/', (req, res)=>{
    res.send('root route')
})
app.get('/blogs', (req, res)=>{
    res.render('index', {arr})   // passing values in obj 
})

app.get('/blogs/new', (req, res)=>{
    res.render('task') 
})



                                 
app.listen(8080, ()=>{
    console.log('server listening to port 8080')
})







