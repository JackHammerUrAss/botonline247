const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    } else {
        const embed = new Discord.MessageEmbed()
        .setTitle('The Bot is online!')
        .setFooter('TA', bot.user.displayAvatarURL())
        .setTimestamp()
        
        message.channel.send(embed);
     
    }
}
      
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    



module.exports.config = {
    name: "online",
    description: "checks if the bot is online",
    usage: "a!online",
    accessableby: "Members",
    aliases: []
}