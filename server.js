const express = require('express');
const app = express();
const api = require('./api');
const wagner = require('wagner-core');
const morgan = require('morgan'); //logger
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const async = require('async');
const connect = require('./connect');
const interface = require('./interface');

require('./models')(wagner);
require('./dependencies')(wagner);


wagner.invoke(require('./auth'), { app: app });

app.set('port', (process.env.PORT || 8081 ))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/v1', require('./api')(wagner)); //app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use(function (req, res) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

// MongoDB connection
var uri = 'mongodb://localhost:27017/movies';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))   
db.once('open', function () {
    console.log(`connected to MongoDB`);

    app.listen(app.get('port'), function () {
        console.log('API Server listening on port ' + app.get('port') + '!')
    })
})




