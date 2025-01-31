const express = require('express')
const cors = require('cors')
const router = express.Router();

const bot = require('../configs/apiWatsapBot')

router.post('envioDeDatos', (req, res) => {
    const {
        nombre,
        Apellido,
        Email,
        NumeroDeTelefono,
        NombreDeEmpresa,
        Extradatos
    } = req.body;

    
    res.status(201).json({
    message: "Todo Correcto",
    datos: {
        nombre,
        Apellido,
        Email,
        NumeroDeTelefono,
        NombreDeEmpresa,
        Extradatos
    }
    });

    bot.enviar(
        nombre,
        Apellido,
        Email,
        NumeroDeTelefono,
        NombreDeEmpresa,
        Extradatos
    );

    
})