const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const everyoneChannel = message.mentions.channels.first();
const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'))
        message.channel.send('you dont have permission to use this command');
     else {
        if(!everyoneChannel) return message.channel.send('Please provide a channel');
        everyoneChannel.send('@everyone')

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