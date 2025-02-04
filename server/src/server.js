const express = require('express');
const cors = require('cors');
const EnvioDeDatos = require('./router/EnvioDeDatos');

const app = express();

const PORT = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());

app.use('/api', EnvioDeDatos);

app.use('/', (req, res) => {
    res.send("Backend de Magician TECH")
})

app.use((req, res) => {
    console.log(`Ruta 404 invalida`)
    res.status(404).json({ mssage:"Ruta Invalida"})
})

app.listen(PORT, () => {
    console.log(`Servidor Corriendo en ${PORT}`)
});

module.exports = app;