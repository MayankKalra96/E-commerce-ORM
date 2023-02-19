const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'dance music',
    },
    {
        tag_name: 'love music',
    },
    {
        tag_name: 'e',
    },
    {
        tag_name: 'd',
    },
    {
        tag_name: 'c',
    },
    {
        tag_name: 'b',
    },
    {
        tag_name: 'a',
    },
    {
        tag_name: 'sad culture',
    },
];

const seedTgs = () => Tag.bulkCreate(tagData);

module.exports = seedTgs;