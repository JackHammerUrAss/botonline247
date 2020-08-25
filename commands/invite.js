const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('no spamming please...')
    } else {
        message.reply('https://bit.ly/2Y6xFgy')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 20000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}


module.exports.config = {
    name: "invite",
    description: "gives the bot invite ",
    usage: "a!invite",
    accessableby: "Members",
    aliases: ['i']
}