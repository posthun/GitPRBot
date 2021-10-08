
require('dotenv').config()
const axios = require('axios');
const bodyParser = require('body-parser')
const express = require('express');

const app = express();
const port = process.env.PORT || 6969;
const baseurl = "https://api.github.com/repos/";

app.listen(port);
console.log('started listening at http://localhost:' + port);

app.get('/AssignedPullRequests/{userName}', (req, res) => {
    console.log('calledaRequestRoute');


})