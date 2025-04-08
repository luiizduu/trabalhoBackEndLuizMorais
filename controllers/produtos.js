const db = require('../services/db');

exports.getAll = (req, res) => {
    db.query('SELECT * FROM Produtos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.create = (req, res) => {
    const { nome, descricao, preco } = req.body;
    db.query('INSERT INTO Produtos (nome, descricao, preco) VALUES (?, ?, ?)', [nome, descricao, preco], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, nome, descricao, preco });
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    db.query('UPDATE Produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?', [nome, descricao, preco, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto atualizado com sucesso!' });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Produtos WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto deletado com sucesso!' });
    });
};