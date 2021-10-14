const mongoose = require('mongoose');



const { Schema } = mongoose;

const generalSchema = new Schema({  // пример схемы
    color: {
        type: Schema.Types.String
    },
    size: {
        type: Schema.Types.String,
        maxLength: 5
    }
    
});

const model = mongoose.model('group', generalSchema); // создаем модель (['название модели' = название файла], [сама схема])
module.exports = model;