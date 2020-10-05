const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const {PORT} = process.env || 5000;


app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose database connection is established')
})
app.listen(PORT, () => {
    console.log(`Server connected at ${PORT}`)
})