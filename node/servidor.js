// Carrega o modulo HTTP do Node
const http = require('http');
// Configura o hostname e porta
const hostname = '127.0.0.1';
const port = 3000;

// Cria um servidor HTTP e uma escuta de requisições para a porta 3000
http.createServer(function (request, response) {
    // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Manda o corpo da resposta "Olá Mundo"
    response.end('Hello, World!');
}).listen(port, hostname);
