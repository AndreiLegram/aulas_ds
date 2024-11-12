const express = require('express');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const app = express();

// Configura o parser para requisições com JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

function verifyJWT(req, res, next) {
    const hasAuth = req.headers.hasOwnProperty('authorization')
    if (!hasAuth) return res.status(401).json({ message: "Auth não informado" });
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Token não fornecido" });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err)
            return res.status(500).json({ auth: false, message: "Token inválido" });
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

// Rota publica
app.get('/publica', (req, res) => {
    res.json({ message: 'Acesso ao recurso público' });
});

// Rota privada
app.get('/privada', verifyJWT, (req, res, next) => {
    res.json({ message: 'Acesso ao recurso protegido permitido' });
});

// Rota para fazer login e gerar um token JWT
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // Verifica se o usuário e senha existem em nossa “base de dados”
    if (username === "usuario" && password === "senha") {
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300, // expira em 5min
        });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Credenciais inválidas" });
    }
});

app.listen(port, () => {
    console.log(`Serviço iniciado na porta ${port}`);
});
