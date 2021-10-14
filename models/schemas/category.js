const mongoose = require('mongoose');
// const path = require('path');



const { Schema } = mongoose;

const generalSchema = new Schema({  // пример схемы
    name: {
        type: Schema.Types.String,
        default: '',
        maxLength: 255,
        unique: true
    },
});

const model = mongoose.model('category', generalSchema); // создаем модель (['название модели' = название файла], [сама схема])
module.exports = model;