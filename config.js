const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
};


module.exports = {
BOT_NAME: process.env.BOT_NAME === undefined ? '': process.env.BOT_NAME,
SEND_MESSAGE: process.env.SEND_MESSAGE === undefined ? '': process.env.SEND_MESSAGE,
};
