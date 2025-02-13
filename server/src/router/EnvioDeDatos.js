const express = require('express')
const router = express.Router();

const botFunction = require('../configs/apiTelegramBot')

router.post('/envioDeDatos', (req, res) => {
    const {
        nombre,
        apellido, // ✅ Ahora coincide con el frontend
        email, // ✅ Ahora coincide con el frontend
        telefono, // ✅ Ahora coincide con el frontend
        empresa, // ✅ Ahora coincide con el frontend
        detalles // ✅ Ahora coincide con el frontend
    } = req.body;

    console.log("Datos recibidos en el backend:", req.body); // ✅ Para depuración

    res.status(201).json({
        message: "Todo Correcto",
        nombre,
        apellido,
        email,
        telefono,
        empresa,
        detalles
    });

    botFunction.enviar(
        nombre,
        apellido,
        email,
        telefono,
        empresa,
        detalles
    );
});


module.exports = router;
