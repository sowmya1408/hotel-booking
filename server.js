const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cutomerRoute = require('./routes/customers.route');
const roomRoute = require('./routes/rooms.route');
const bodyParser = require('body-parser');

require('dotenv').config();
const {PORT} = process.env || 5000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true ,useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose database connection is established')
})

app.use('/customers', cutomerRoute);
app.use('/rooms', roomRoute);
app.listen(PORT, () => {
    console.log(`Server connected at ${PORT}`)
})