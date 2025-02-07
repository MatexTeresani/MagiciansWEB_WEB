const express = require('express')
const cors = require('cors')
const router = express.Router();

const botFunction = require('../configs/apiTelegramBot')

router.post('/envioDeDatos', (req, res) => {
    const {
        nombre,
        Apellido,
        Email,
        NumeroDeTelefono,
        NombreDeEmpresa,
        Extradatos
    } = req.body;

    console.log(req.body);
    
    
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

    botFunction.enviar(
        nombre,
        Apellido,
        Email,
        NumeroDeTelefono,
        NombreDeEmpresa,
        Extradatos
    );

    
})

module.exports = router;
