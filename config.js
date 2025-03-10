const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
};


module.exports = {
BOT_NAME: process.env.BOT_NAME === undefined ? 'vishwa ofc public session id genrator': process.env.BOT_NAME,
SEND_MESSAGE: process.env.SEND_MESSAGE === undefined ? 'sucssesfull genarate session id✔️💀': process.env.SEND_MESSAGE,
};
