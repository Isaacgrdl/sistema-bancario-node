'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

//Connect DB
mongoose.connect(config.connectionString, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
});

//Loading Models
const Client = require('./models/client');
const Employee = require('./models/employee');
const Account = require('./models/account');
const Extract = require('./models/extract');

//Loading Routes
const indexRoute = require('./routes/indexRoute');
const clientRoute = require('./routes/clientRoute');
const employeeRoute = require('./routes/employeeRoute');
const accountRoute = require('./routes/accountRoute');
const reportRoute = require('./routes/reportRoute');
const extractRoute = require('./routes/extractRoute');
const authRoute = require('./routes/authRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/auth', authRoute);
app.use('/clients', clientRoute);
app.use('/extracts', extractRoute);
app.use('/admin/employee', employeeRoute);
app.use('/admin/accounts', accountRoute);
app.use('/admin/reports', reportRoute);

module.exports = app;