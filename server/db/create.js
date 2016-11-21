var config = require('../config');
var models = require('./models');

var sequelize = models.sequelize;

sequelize
    .sync({ force: true })
    .then(function(err) {
        console.log('DB created');
    }, function (err) {
        console.log('An error occurred while creating the table:', err);
    });
