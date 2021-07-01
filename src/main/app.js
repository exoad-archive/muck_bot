const { Discord, Client } = require('discord.js');
const colors = require('colors');
const read = require('read-file');
const bot = new Client();
const utili = require('/json/utili.json')

// TODO: Add token
bot.login(read('keys/token.lock', {encoding: 'utf8'}));

bot.on('ready', async () => {
    console.info("Online.".bold.blue);
})
