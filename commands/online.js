const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('The Bot is online!')
        .setDescription("**Last Listed Update:**\n    <16-0-2020>\n**Online since:**\n    <22-8-2020")
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