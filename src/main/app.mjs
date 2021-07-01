import { randomMuck, tokenCall } from "./mdl/readers.mjs";
import { Client, Message } from "discord.js";
import colors from "colors";
import read from "read-file";
import delay from "delay";

const bot = new Client();

var prefix = "muck";

bot.on("ready", async () => {
    console.info("Online.".bold.blue);
});

bot.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command == "ping") {
        console.log("logged");
        message.channel.send("<@"+ message.guild.members.cache.random().user +"> " +randomMuck());
    } else if(command == "code") {
        message.channel.send("**"+ message.author.username +"** has posted a code, you can check it out in #muck-code")
        try {
            bot.channels.cache.find(channel => channel.name === "muck-code").send("hello");
            if(!message.guild.channels.cache.find('muck-code')) {
                message.guild.channels.create("muck-code", {
                    type: "text", 
                    permissionOverwrites: [
                        {
                        id: message.guild.roles.everyone, 
                        allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
                        deny: ['SEND_MESSAGES']
                        }
                    ],
                })
                message.channel.send("No code channel was found so I created one. Check #muck-code")
                return;
            }
        } catch (e) {
            return;
        }
    } 
});


bot.login(tokenCall());