const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publishDate: {
        type: Date,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
});

BookSchema.plugin(mongoosePaginate);

mongoose.model("Book", BookSchema);
