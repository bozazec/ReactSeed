var express     = require('express');
var routes      = express.Router();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var cors        = require('cors');
var path        = require('path');

app = express(); // Make app global
var http        = require('http').Server(app);
app.set('models', require('./db/models'));
var config      = require('./config.js');

var User = app.get('models').User;

const PORT = process.env.PORT || 9000;

app.use(morgan('dev'));
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options("*", cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
    next();
});

app.use('/dist', express.static(__dirname + '/../dist'));

app.get('/data', (req, res) => {
    console.log('req: ', req.query);
    const username = req.query.username;
    User.find({where:{username:username}}).then( user => {
        if(user) {
            return res.json({
                success: true,
                message: "user found",
                user: user

            });
        } else {
            return res.status(401).send({
                success: false,
                message: "wrong username"
            });
        }
    }, err => {
        console.log('error: ', err);
    });
});

app.get('/', (req, res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.use('/api', routes);

http.listen(PORT, ()=>{
    console.log('listening on *:' + PORT);
});