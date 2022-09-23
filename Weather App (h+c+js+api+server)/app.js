const { response } = require('express');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function(req, res){

    res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res){
    const queryCity = req.body.cityName;
    const apiKey = "47658382ee91bd60880bcff93751ab11";
    const unit = req.body.units;
    var deg = {metric: "Celsius", standard: "Kelvin", imperial: "Fahrenheit"};
    const degree = deg[unit];
    var windUnit = "meter/sec";
    if(unit === "imperial"){
        windUnit = "miles/hour";
    }
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryCity+"&units="+unit+"&appid="+apiKey;

    https.get(url, function(response){
        console.log(response.statusCode);
        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const des = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const pressure = weatherData.main.pressure;
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;
            res.write("<h1>The Temp in "+queryCity+" is " + temp + " degree " + degree+ "</h1>"); 
            res.write('<p>The weather is currently ' +des+ '</p>')
            res.write('<img src=https://openweathermap.org/img/wn/'+ icon +'@2x.png>');
            // res.write("<h4> Taking "+ unit +" Units</h4>");
            res.write("<h3>Humidity is: " +humidity+" % </h3>");
            res.write("<h3>Pressure is: " +pressure+" hPa</h3>");
            res.write("<h3>Wind speed is: " +windSpeed+" "+windUnit+" </h3>");
            
            res.send();
        })
    });
});




app.listen(3000, function(){
    console.log('server started at port 3000');
});