const mongoose = require('mongoose');



const { Schema } = mongoose;

const generalSchema = new Schema({  // пример схемы
    name: {
        type: Schema.Types.String,
        default: '',
        maxLength: 255,
        unique: true
    },
    description: {
        type: Schema.Types.String
    },
    price: {
        type: Schema.Types.Number
    },
    caracteristic: {
        type: Schema.Types.ObjectId,
        ref: 'caracteristic'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'group'
    }
    
});

const model = mongoose.model('item', generalSchema); // создаем модель (['название модели' = название файла], [сама схема])
module.exports = model;