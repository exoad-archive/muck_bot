import { randomMuck, tokenCall } from "./mdl/readers.mjs";
import { Client, Message } from "discord.js";
import colors from "colors";
import read from "read-file";
import delay from "delay";

const bot = new Client();

var prefix = ">muck";

bot.on("ready", async () => {
  console.info("Online.".bold.blue);
});

bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  /*
    while(true) {
        await delay(10000);
        message.channel.send(userd.user + randomMuck);
        console.info(userd.user.id + "pinged");
    };
    */
  if (command == "ping") {
      console.log("logged");
      message.channel.send(message.guild.members.cache.random().user + randomMuck);
  }
});

bot.login(tokenCall());