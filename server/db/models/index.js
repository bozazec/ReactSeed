var Sequelize = require('sequelize');
var config = require('../../config');

var sequelize = new Sequelize('test_db', 'test', 'test', {
    dialect: config.dialect,
    storage: config.database_path
});

var models = [
    'User'
];

models.forEach(model=>{
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

module.exports.sequelize = sequelize;
