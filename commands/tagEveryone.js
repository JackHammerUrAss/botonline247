const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTARTOR'))
        message.channel.send("You don't have permission to use that command.");
     else {
       message.Channel.channel.send('@everyone')
            
        
       
     
        
         
    }
}


module.exports.config = {
    name: "tag everyone",
    description: "sends a link",
    usage: "a!te",
    accessableby: "Creative Managers",
    aliases: ['tagAll']
}