// Importar módulos necessários
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
// Define o schema do Curso
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {

        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Adiciona o plugin mongoosePaginate em nosso schema
CourseSchema.plugin(mongoosePaginate);

// Registra o model Course em nossa aplicação informando seu schema
mongoose.model("Course", CourseSchema);