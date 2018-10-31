
'use strict';
var cors = require('cors');
module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/user')
        .get(cors(),todoList.users);

};