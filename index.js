const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username}is online`)
    bot.user.setActivity("Rust", {type: "WATCHING", url:"https://twitch.tv/Strandable"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    if(cmd === `${prefix}hi`){
        return message.channel.send("Hello")
    }
})

bot.login(process.env.token);
