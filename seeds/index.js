const seedCategries = require('./category-seeds');
const seedProdcts = require('./product-seeds');
const seedTgs = require('./tag-seeds');
const seedProdctTgs = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategries();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProdcts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedTgs();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProdctTgs();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();