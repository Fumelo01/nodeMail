const express = require('express');
const app = express();

exports.ample = (req,res) => {
    console.log('Home shirt');
    res.send('Hello World');
}