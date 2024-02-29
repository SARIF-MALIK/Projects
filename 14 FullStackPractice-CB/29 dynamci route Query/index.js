const express = require('express'); 

const app = express() 

app.use('/', (req, res, next)=>{
    // middleware for specific task before hitting api 
    next()     
})                                 


app.get('/', (req, res)=>{
    res.send('/ home route hit')
})

app.get('/r/:dynamic', (req, res)=>{
    console.log(req.params)
    // console.log(req.params.dynamic)     
    let {dynamic} = req.params;                // dynamic is subreddit 
    res.send(`dynamic route hit ${dynamic}`) 
                // returns object 
})


app.get('/search', (req, res)=>{
    console.log(req.query); 
    res.send('query found...'); 
})
app.listen(8080, ()=>{
    console.log('server is running at port 8080'); 
})



//  query parameter 

