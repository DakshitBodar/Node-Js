const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
    book_name : String ,
    author : {
        type : String,
    },
    publisher:{
        type: String
    },
    price:{
        type : Number
    },
    category:{
        type : String   
    },
    book_image:{
        type : String
    }
})

module.exports = mongoose.model('Books', BooksSchema);