// Importa o modulo do Express
const express = require("express");

// Cria uma aplicação Express
const app = express();

// Configura o parser para requisições com json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Define um array
let accounts = [
    {
        id: 1,
        username: "paulhal",
        role: "admin",
    },
    {
        id: 2,
        username: "johndoe",
        role: "guest",
    },
    {
        id: 3,
        username: "sarahjane",
        role: "guest",
    },
];

// Define a rota /accounts para o verbo get
app.get("/accounts", (req, res) => {
    res.json(accounts);
});

// Define a rota /accounts com o parâmetro id para o verbo get
app.get("/accounts/:id", (req, res) => {
    // Busca o parametro id da requisição
    const accountId = Number(req.params.id);
    // Verifica se este id existe no array de accounts
    const getAccount = accounts.find((account) => account.id === accountId);
    if (!getAccount) {
        res.status(500).send("Esta conta não existe.");
    } else {
        res.json(getAccount);
    }
});

// Define a rota /accounts para o verbo post
app.post("/accounts", (req, res) => {
    const incomingAccount = req.body;
    accounts.push(incomingAccount);
    res.json(incomingAccount);
});

// Define a rota /accounts com o parâmetro id para o verbo put
app.put("/accounts/:id", (req, res) => {
    // Busca o parametro id da requisição
    const accountId = Number(req.params.id);
    const body = req.body;
    // Verifica se este id existe no array de accounts
    const account = accounts.find((account) => account.id === accountId);
    const index = accounts.indexOf(account);

    if (!account) {
        res.status(500).send("Conta não foi encontrada.");
    } else {
        const updatedAccount = { ...account, ...body };
        accounts[index] = updatedAccount;
        res.send(updatedAccount);
    }
});

// Define a rota /accounts com o parâmetro id para o verbo delete
app.delete("/accounts/:id", (request, response) => {
    // Busca o parametro id da requisição
    const accountId = Number(request.params.id);
    const newAccounts = accounts.filter((account) => account.id != accountId);
    if (!newAccounts) {
        response.status(500).send("Conta não encontrada.");
    } else {
        accounts = newAccounts;
        response.send(accounts);
    }
});

// Inicia o servidor na porta '3000'
app.listen(3000, () => {
    // imprime um comentário de log no console
    console.log("🚀 Exemplo de aplicativo ouvindo a porta 3000");
});
