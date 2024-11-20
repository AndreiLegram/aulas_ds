const { MongoClient, ServerApiVersion } = require("mongodb");
// Substitua a string uri pela string de conexão do MongoDB
const uri = "mongodb://127.0.0.1:27017";
// Crie um MongoClient com um objeto MongoClientOptions para definir a versão estável da API
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
async function run() {
    try {
        await client.connect();
        const database = client.db("ifrs_db");
        const collection = database.collection("courses");
        const query = { name: 'Agronomia' };
        const result = await collection.deleteOne(query);
        if (result.deletedCount === 1) {
            console.dir("Exclusão realizada com sucesso.");
        } else {
            console.log("Não foi possível encontrar um documento");
        }
    } finally {
        // Garante que o client fechará quando você terminar ou der erro
        await client.close();
    }
}
run().catch(console.dir);
