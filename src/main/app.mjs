/*
 * TODO: Add a action listener and command handlers 
 * TODO: Add an event listener for things like statuses and stuff
 */

import { randomMuck, tokenCall } from "./mdl/readers.mjs";
import { Client, Message, MessageEmbed } from "discord.js";
import colors from "colors";
import read from "read-file";
import delay from "delay";
import pkg from 'discord-buttons'

const disbut = pkg;
const bot = new Client();
disbut(bot);

var prefix = "muck";

bot.on("ready", async () => {
    console.info("Online.".bold.blue);
});

bot.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    // TODO: actually make this like random ==> .ra
    if (command == "ping") {
        message.channel.send("<@"+ message.guild.members.cache.random().user +"> " +randomMuck());
    // TODO: update todo timer
    } else if(command == "code") {
        var code = args.slice(0).join(' ');
        if(!code || code.length > 18 || code == undefined || isNaN(code)) return message.reply("check the code, don't think its a valid one. usage for this command: `"+ prefix +" code <muck_code>`");
        try {
            if(!message.guild.channels.cache.find('muck-code')) { //creats the desired channel to store new codes and post new codes
                message.guild.channels.create("muck-code", {
                    type: "text", 
                    permissionOverwrites: [
                        {
                        id: message.guild.roles.everyone, 
                        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //read only code channel
                        deny: ['SEND_MESSAGES']
                        }
                    ],
                })
                message.channel.send("No code channel was found so I created one. Check #muck-code")
                message.channel.send("**"+ message.author.username +"** has posted a code, you can check it out in #muck-code")
                bot.channels.cache.find(channel => channel.name === "muck-code").send("**New Muck Code:** "+code+"\n**Host:** "+message.author.username).then(async m => { //applied the desired marks to the posted code
                    m.react(':white_check_mark:');
                    m.react(':negative_squared_cross_mark:');
                    await delay(6000);
                    m.edit("**Muck Code:** " + code)
                })
                return;
            } else if(message.guild.channels.cache.find('muck-code')) {
                message.channel.send("**"+ message.author.username +"** has posted a code, you can check it out in #muck-code")
                bot.channels.cache.find(channel => channel.name === "muck-code").send("**New Muck Code:** "+code+"\n**Host:** "+message.author.username).then(async m => { //applied the desired marks to the posted code
                    m.react(':white_check_mark:');
                    m.react(':negative_squared_cross_mark:');
                    await delay(6000);
                    m.edit("**Muck Code:** " + code)
                })
            }
        } catch (e) {
            return;
        }
    } else if(command == "what" || command == "steam") {
        let embed = new MessageEmbed()
            .setTitle("Muck")
            .setColor('RANDOM')
            .setDescription("Trapped in the muck on an island, alone or with your friends, try to survive as long as possible by using the resources you find around the island.Collect resources, craft tools, weapons, & armor, find items & build your base during day. But once night falls, mysterious enemies appear from the shadows. Using the resources and items you've crafted during the day, you must try and make it through the night.Island throws you and your friends into a fun and action packed experience on a procedurally generated island. Do you have what it takes to survive?")
            .addField("Developer & Publisher", "Dani")
        
        let viewOnSteam = new disbut.MessageButton()
            .setStyle('url')
            .setURL('https://store.steampowered.com/app/1625450/Muck/') 
            .setLabel('View on Steam') 
        message.channel.send(embed);
        message.channel.send('___', viewOnSteam)
    } else if(command == "help") {
        let embed = new MessageEmbed()
            .setTitle("Commands")
            .addField("Avaliable cmds", "```steam, help, code```")

        message.channel.send(embed)
    } else if(command == "invite") {
        let inviteServer = new disbut.MessageButton()
            .setStyle('url')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=860157415600291850&permissions=4294963191&scope=bot')
            .setLabel("invite")
        
        message.channel.send("Invite Muck Bot to your own server(s)", inviteServer);

        
    }
});


bot.login(tokenCall());