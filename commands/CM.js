const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
        message.channel.send("You don't have permission to use that command.");
     else {
        message.reply('Bot is Online!')
        
         
    }
}


module.exports.config = {
    name: "Creative Manager",
    description: "sends a link",
    usage: "a!cm",
    accessableby: "Creative Managers",
    aliases: ['cm']
}