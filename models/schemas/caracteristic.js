const mongoose = require('mongoose');



const { Schema } = mongoose;

const generalSchema = new Schema({  // пример схемы

    matetial: {
        type: Schema.Types.String
    },
    country: {
        type: Schema.Types.String
    },
    ecology: {
        type: Schema.Types.String
    }
        

});

const model = mongoose.model('caracteristic', generalSchema); // создаем модель (['название модели' = название файла], [сама схема])
module.exports = model;