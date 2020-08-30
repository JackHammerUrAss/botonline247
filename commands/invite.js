const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('No spamming please')
    } else {
        const embed = new Discord.MessageEmbed()
        .setTitle('This is the invite link')
        .setDescription('*This command will be on hold for now!*')
        .setFooter('APK', 'https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
        .setTimestamp()
        
        message.channel.send(embed);
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}


module.exports.config = {
    name: "invite",
    description: "gives the bot invite ",
    usage: "a!invite",
    accessableby: "Members",
    aliases: ['i']
}