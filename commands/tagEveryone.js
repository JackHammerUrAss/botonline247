const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'))
        message.channel.send('you dont have permission to use this command');
     else {
        const everyoneChannel = message.mentions.channels.first();
        everyoneChannel.send('@everyone')
        const welcomeChannel = channels.cache.find(channel => channel.name === 'moderation')
        welcomeChannel.send(`user: ${user} has tagges everyone in ${everyoneChannel}`)

    }

    
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000);
    }



module.exports.config = {
    name: "tagEveryone",
    description: "checks if the bot is online",
    usage: "a!tagEveryone",
    accessableby: "Admins",
    aliases: ['tagEveryone', 'te']
}