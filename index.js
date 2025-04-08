const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const httpErrors = require('http-errors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.use((req, res, next) => {
    next(httpErrors(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});