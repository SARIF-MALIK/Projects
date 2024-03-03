const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');


let comments = [
    {
        id : uuid() , 
        author : "Samarth",
        comment: "backend is easy"
    },
    {
        id : uuid() , 
        author : "Priyanshu",
        comment: "kavita meri didi hai"
    },
    {
        id : uuid() , 
        author : "Harshil",
        comment: "one note nhi dikhra"
    },
    {
        id : uuid() , 
        author : "Tavneet",
        comment: "populate samjha do"
    },
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true})); //body ka middleware jab aap post request bhejkar data dekhna chahte hai

var methodOverride = require('method-override')
// app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('_method'))

// root route
app.get('/' , (req,res)=>{
    res.send('root route')
})

// to show all the blogs
app.get('/blogs' , (req,res)=>{
    // res.render('index' , {comments:comments})
    res.render('index' , {comments})
})


// to show a particular form
app.get('/blog/new' , (req,res)=>{
    res.render('new');
})

// to actually add in the db
app.post('/blogs' , (req,res)=>{
    // console.log(req.body);
    let {author , comment} = req.body;
    comments.push({author , comment , id: uuid() })
    res.redirect('/blogs');          // / for get req if not present error 
})

// to show a particular blog
app.get('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    let foundProduct = comments.find((item)=>item.id === id );
    // console.log(foundProduct)
    res.render('show' , {foundProduct})
})

app.get('/blogs/:id/edit', (req, res)=>{
    let {id} =req.params; 
    let foundProduct = comments.find((item)=>item.id === id); 
    res.render('edit', {foundProduct}); 
})


app.patch('/blogs/:id', (req, res)=>{
    let {id} =req.params; 
    let {comment} = req.body
    let foundProduct = comments.find((item)=>item.id === id); 
    foundProduct.comment = comment
    res.redirect('/blogs')
})

app.delete('/blogs/:id', (req, res)=>{
    let {id} =req.params; 
    let {comment} = req.body
    comments = comments.filter((item)=>item.id !== id)
    res.redirect('/blogs')
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})