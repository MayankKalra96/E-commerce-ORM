const expresss = require('express');
const routs = require('../routes');
const sequelize = require('./models/config/connection');

const app = expresss();
const PORT = process.env.PORT || 3009;

app.use(expresss.json());
app.use(expresss.urlencoded({ extended: true }));

app.use(routs);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});