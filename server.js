const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//load env
dotenv.config({ path: './config/config.env' });

//connect to db
connectDB();

const app = express();

//body parser

app.use(express.json());

app.use(cors());

//routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Run in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
});

