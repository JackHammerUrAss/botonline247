const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("you don't have permission to use that command!");
    else {
        let member = message.guild.member.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('kicked');
            message.channel.send(`${member}, kicked!`)
        }
            catch(err) {
            console.log(err) ;         
        }
    }
}
}

module.exports.config = {
    name: "kick",
    Description: "kicks a user",
    usage: "*kick", 
    accessableby: "Admins",
    aliases: []
}