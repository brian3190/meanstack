var express = require('express');
var wagner = require('wagner-core');
var bodyParser = require('body-parser');
var aync = require('async');
var connect = require('./connect');
var interface = require('./interface');
var uri = 'mongodb://localhost:27017/movies';

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, (req, res) => {
            console.log(`connected to db`);
        })
    })
    .catch(err => {
        console.log(err);
    });


app.use(bodyParser.json());
app.use(routes);
