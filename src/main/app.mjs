import { randomMuck, tokenCall } from 'modules/readers.mjs'
import { Client, Message } from 'discord.js'
import colors from 'colors'
import read from 'read-file'
import delay from 'delay'

const bot = new Client();

// TODO: Add token
bot.login(tokenCall());

bot.on('ready', async () => {
    console.info("Online.".bold.blue);
});

bot.on('message', async (message) => {
    var userd = message.guild.members.random();
    while(true) {
        await delay(10000);
        message.channel.send(userd.user + randomMuck);
        console.info(userd.user.id + "pinged");
    }
})