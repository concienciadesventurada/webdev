const express = require("express");
const https = require("https");

const app = express();

app.listen(3000, function() {
  console.log("Server started at port 3000");
});

/*
app.get("/", function(req, res) {
  res.send("HTML servido por app.get({res.send})");
});
*/

app.get("/", function(req, res) {
  const openWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c8fb8f89ab5f1d27aa93da129ccfa9b5";

  https.get(openWeatherApi, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      // console.log(data) -> resulta en hexadecimal
      const weatherData = JSON.parse(data); // 
      
      console.log(weatherData);
    });
  });
  res.send("HTML servido por app.get({res.send})");
});
