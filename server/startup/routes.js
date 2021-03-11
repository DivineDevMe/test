const users = require('../routes/users');

module.exports = function (app,express){
    app.use(express.json());
    app.use('/api/users',users);
}