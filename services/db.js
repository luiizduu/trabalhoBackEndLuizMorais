const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'trabalhoBackEnd',
    password: '',
    database: 'trabalho_backend'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL no XAMPP!');
});

module.exports = connection;