var models = require('./models');
var User = models.User;

var user1 = User.build({
    username: 'marko'
});

var user2 = User.build({
    username: 'darko'
});

var user3 = User.build({
    username: 'ranko'
});

user1.save();
user2.save();
user3.save();