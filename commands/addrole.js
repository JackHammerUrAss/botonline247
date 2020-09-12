const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('ADDRole Command')
        .setDescription('diffrent variables for the folllow command (a!add{variable} so example is a!addTeam \n*Team* \n*Verified*')
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