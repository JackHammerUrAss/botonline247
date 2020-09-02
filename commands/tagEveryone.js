const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'))
        message.channel.send('you dont have permission to use this command');
     else {
        message.channel.send('@everyone')

    }

    
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }



module.exports.config = {
    name: "tagEveryone",
    description: "checks if the bot is online",
    usage: "a!tagEveryone",
    accessableby: "Admins",
    aliases: ['tagEveryone', 'te']
}