const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 3000; 
app.use(cors());


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

// Create a route on your server to fetch and forward data from the third-party API
app.get('/fetch-data', async (req, res) => {
  try {
    // Make a request to the third-party API
    const apiUrl = 'https://www.communitybenefitinsight.org/api/get_hospitals.php'; 
    const response = await axios.get(apiUrl);

    // Send the response data to the client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the API');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
