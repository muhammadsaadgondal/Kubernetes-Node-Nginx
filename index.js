
const express = require('express');
const os = require('os');
const axios = require('axios');

const app = express();


app.get('/', (req, res) => {
    const hostname = `What's up bitches, its ${os.hostname()}`;

    console.log(`Response is coming from ${hostname}`);
    res.send(hostname);

})

app.get('/nginx', async (req, res) => {
    try {
        const response = await axios.get('http://nginx:80');
        // Return the response from NGINX
        res.status(response.status).send(response.data);
    } catch (error) {
        console.error('Error connecting to NGINX:', error.message);
        res.status(500).send('Unable to connect to NGINX');
    }
});

app.listen(3000, () => {
    console.log("Server is up and running");

})