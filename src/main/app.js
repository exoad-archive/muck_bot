import { Client } from "discord.js"
import Discord from Discord.js

const colors = require('colors');
const read = require('read-file');
const bot = new Client();
const utili = require('/json')

bot.on('ready', async () => {
    console.info("Online.".bold.blue);
})

// TODO: Add token
bot.login(read('keys/token.lock', {encoding: 'utf8'}));