const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var cors = require('cors')

const app = express();
const port = 8000; // You can change the port as needed

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'f15dc6b174d6d237343dfb00864330a1';
app.get("/",(req,res)=>{
    res.send("hii")
});

app.post("/weather", async(req,res)=>{
    
    const {city} = req.body;
    console.log(req.body);
    // const city =  req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    
    let weather;
    try {
        const response = await axios.get(url);
        weather = response.data;
        res.json({weather});
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
