let express = require('express')
const path = require('path')
const {v4: uuid} = require('uuid');
const { log } = require('console');
var methodOverride = require('method-override')

const app = express(); 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

let comments = [
    {
        id : uuid(),
        course : 'DSA', 
        des : 'this is waste pl never buy this course' , 
        fee : "bohot jyada"
    }, 
    {
        id : uuid(),
        course : 'Web', 
        des : 'this is time taking pl never buy this course' , 
        fee : "bohot jyada se bhi jyada"
    }, 
    {
        id : uuid(),
        course : 'Python', 
        des : 'python se placement pakka' , 
        fee : "free"
    }
]


app.get('/', (req, res)=>{
    res.render('index', {comments})
})
app.get('/new', (req, res)=>{
    res.render('new')
})
app.post('/new', (req, res)=>{
    let {course, des, fee} = req.body; 
    comments.push({course, des, fee, id:uuid()}); 
    res.redirect('/'); 
})

app.get('/:subreddit/show', (req, res)=>{
    let id = req.params.subreddit; 
    let foundItem = comments.find((comment)=>comment.id === id)
    res.render('show', {foundItem}); 
})

app.get('/:subreddit/edit', (req, res)=>{
    let {subreddit} = req.params; 
    console.log(subreddit); 
    let obj = comments.find((comment)=> comment.id == subreddit)
    console.log(obj); 
    res.render('edit', {obj}); 
})

app.patch('/:subreddit/edit', (req, res)=>{
    let {course, des, fee} = req.body; 
    let id = req.params.subreddit; 
    // Change the variable name here to avoid conflict
    let val = comments.find((comment) => comment.id === id);
    val.course = course;
    val.des = des; 
    val.fee = fee; 
    res.redirect('/');
})

app.delete('/:subreddit/delete', (req, res)=>{
    let {subreddit} = req.params; 
    comments = comments.filter((comment)=>comment.id != subreddit); 
    res.redirect('/'); 
})

app.get('*', (req, res)=>{
    res.send('<h1>404 Page not found</h1>')
})
app.listen(8080, ()=>{
    console.log('server running at port 8080'); 
})