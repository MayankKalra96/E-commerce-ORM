const { Product } = require('../models');

const productData = [
    {
        product_name: 'Plain T-Shirt',
        price: 17.99,
        stock: 11,
        category_id: 1,
    },
    {
        product_name: 'pink Sneaker',
        price: 20.0,
        stock: 45,
        category_id: 5,
    },
    {
        product_name: 'red sneakers',
        price: 55.99,
        stock: 89,
        category_id: 4,
    },
    {
        product_name: 'sad-love songs',
        price: 11.99,
        stock: 510,
        category_id: 3,
    },
    {
        product_name: 'half_Shorts',
        price: 129.99,
        stock: 23,
        category_id: 2,
    },
];

const seedProdcts = () => Product.bulkCreate(productData);

module.exports = seedProdcts;