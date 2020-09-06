const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('The Bot is online!')
        .setFooter('TA', bot.user.displayAvatarURL())
        .setTimestamp()
        
        message.channel.send(embed);
     
    }

      
    



module.exports.config = {
    name: "online",
    description: "checks if the bot is online",
    usage: "a!online",
    accessableby: "Members",
    aliases: []
}