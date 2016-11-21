module.exports = function(sequelize, DataType){
    return sequelize.define('User', {
        id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        username: DataType.STRING,
        name: DataType.STRING
    });
}
