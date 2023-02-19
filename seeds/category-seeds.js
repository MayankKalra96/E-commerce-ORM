const { Category } = require('../models');

const CategorYData = [
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'half',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'sneakers',
    },
    {
        category_name: 'toys',
    },
];

const seedCategories = () => Category.bulkCreate(CategorYData);

module.exports = seedCategories;