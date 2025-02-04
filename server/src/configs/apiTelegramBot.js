require('dotenv').config();  // Esto carga las variables de entorno

const TelegramBot = require('node-telegram-bot-api');


// Reemplaza este token con el nuevo después de regenerarlo
const token = process.env.TOKEN;

const chatID = process.env.chatID; // Asegúrate de que este Chat ID sea correcto

// ✅ Corrección: Inicializa el bot correctamente
const bot = new TelegramBot(token, { polling: true });

const enviar = (nombre, Apellido, Email, NumeroDeTelefono, NombreDeEmpresa, Extradatos) => {
    let message = `
    Nombre: ${nombre}
    Apellido: ${Apellido}
    Email: ${Email}
    Número de Teléfono: ${NumeroDeTelefono}
    Nombre de Empresa: ${NombreDeEmpresa}
    Extra Datos: 
    ${Extradatos}
        `;

        // ✅ Verificación de errores
        bot.sendMessage(chatID, message)
            .then(() => console.log('Mensaje enviado correctamente'))
            .catch(error => console.error('Error al enviar el mensaje:', error));
};

module.exports = {
    enviar
};