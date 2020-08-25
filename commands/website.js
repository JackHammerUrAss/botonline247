const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    } else {
        message.reply('https://dolfinroemer.wixsite.com/apocolyptic-knights')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 60000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}


module.exports.config = {
    name: "website",
    description: "sends the website",
    usage: "a!website",
    accessableby: "Members",
    aliases: ['web']
}