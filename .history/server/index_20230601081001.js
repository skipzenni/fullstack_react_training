const express = require('express');
const app = express();

const db = require("./models");

app.listen(3002, () => {
    console.log('Server Running...');
});