const roter = require('express').Router();
const apiRoutes = require('./api');

roter.use('/api', apiRoutes);

roter.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = roter;