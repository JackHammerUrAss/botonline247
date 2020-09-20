const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");
    else {
        let member = message.guild.members.cache.get(args[0]) || message.guild.member(message.mentions.members.first()); 
        if(!member){
            return message.reply('Please state a user or userID')
        }
        if(bannedMember){

        try {
            await member.ban();
            console.log(bannedMember.tag + " was banned.");
            message.channel.send (`${bannedMember} Have been Banned from The Server!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "*ban",
    accessableby: "Admins",
    aliases: []
}