const db = require('../services/db');

exports.getAll = (req, res) => {
    db.query('SELECT * FROM Clientes', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.create = (req, res) => {
    const { nome, sobrenome, email, idade } = req.body;
    db.query('INSERT INTO Clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)', [nome, sobrenome, email, idade], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, nome, sobrenome, email, idade });
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, email, idade } = req.body;
    db.query('UPDATE Clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?', [nome, sobrenome, email, idade, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Cliente atualizado com sucesso!' });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Clientes WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Cliente deletado com sucesso!' });
    });
};