const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
console.log(date.getDay());

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const items = ["I have to eat", "I've to cook", "I've to go to Market "];
const workItems = [];

app.get("/", function(req, res){

    let day = date.getDate();
    res.render('list', { listTitle: day, newListItems: items });
})

app.post('/' , function(req, res){
    //console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work');
    }else {
        items.push(item);
        res.redirect('/');
    }
})

app.get('/work', function(req, res){
    res.render('list', {listTitle: "Work", newListItems: workItems});
})

app.post('/work', function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});


app.get('/about', function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("server started at port 3000");
})
