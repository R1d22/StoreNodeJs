require('../bin/runners/db/db');
// const ArticleModel = require('../models/article');
const ItemModel = require('../models/schemas/item');
require('../models/schemas/caracteristic');
require('../models/schemas/category');
require('../models/schemas/group');


const findItem = async () => {
    const items = await ItemModel
    .find({})
    .populate('group')
    .populate('caracteristic')
    .populate('category')
    return items;
};
const findItemByQuery = async (obj) => {
    const items = await ItemModel
    .find({})
    .populate('group')
    .populate('caracteristic')
    .populate({path: 'category', match: {name: obj}})
    const newArr = [];
    items.forEach((el) => {
        if(el.category !== null ) {
            newArr.push(el);

        } 
    })
    return newArr;
};

module.exports = {
    findItem,
    findItemByQuery,
}


// const articleFields = async (data) => {
//     

// const getArticles = async () => {
//     const docs = await ArticleModel.find({});
//     return docs;
// };

// const upadte = async () => {
    
// }


// module.exports = {
//     articleFields,
//     getArticles
// };