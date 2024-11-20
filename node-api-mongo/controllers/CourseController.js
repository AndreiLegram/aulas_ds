// Importando as dependências
const mongoose = require("mongoose");
//Referencia o model Course
const Course = mongoose.model("Course");
// Vamos exportar um objeto com algumas funções
module.exports = {
    // Vai retornar todos os cursos de nosso banco de dados
    async index(req, res) {
        //pega os parãmetros get da requisição
        const { page = 1 } = req.query;
        // retorna os cursos de nosso banco de dados
        const courses = await Course.paginate({}, { page, limit: 10 });
        // vamos retornar em formato JSON
        return res.json(courses);
    },
    // Mostrar o detalhe de um curso
    async show(req, res) {
        const course = await Course.findById(req.params.id);
        // Vamos retornar o course que encontramos
        return res.json(course);
    },
    // Criar um novo curso
    async store(req, res) {
        const course = await Course.create(req.body);
        // Vamos retornar o curso que criamos
        return res.json(course);
    },
    // Atualizar um curso
    async update(req, res) {
        // procura um curso pelo ID e atualiza ele
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        // Vamos retornar o curso que encontramos
        return res.json(course);
    },
    // Excluir um curso
    async delete(req, res) {
        await Course.findByIdAndDelete(req.params.id);
        // Vamos retornar uma mensagem de sucesso sem conteúdo
        return res.send({ msg: "Registro apagado com sucesso!" });
    },
};