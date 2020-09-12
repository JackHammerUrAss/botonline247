const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('ADDRole Command')
        .setDescription('**diffrent variables for the folllow command** \n(a!add{variable} so example is a!addTeam \n\n*Team* \n*Verified*')
        .setFooter('TA', bot.user.displayAvatarURL())
        .setTimestamp()
        
        message.channel.send(embed);
     
    }

      
    



module.exports.config = {
    name: "addrole",
    description: "sends possible variates",
    usage: "a!addrole",
    accessableby: "Members",
    aliases: []
}