const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('BASE')
    .setImage('https://i.imgur.com/RDo1kBR.png')
         
     
    
    message.channel.send(embed);
}

module.exports.config = {
    name: "rust base design",
    description: "",
    usage: "a!base",
    accessableby: "Members",
    aliases: ['base']
}