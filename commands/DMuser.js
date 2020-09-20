const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    
    let messageArray = message.content.split(" ");
    let args2 = messageArray.slice(1)

    if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        message.channel.send("You don't have permission to use that command.").then(m => m.delete({ timeout: 5000}));
    else {
    
        let member = message.guild.members.cache.get(args[0]) || message.guild.member(message.mentions.members.first()); 
        if(!member)
        return message.reply("please mention a user or userID").then(m => m.delete({ timeout: 5000}));

        let DMReason = args2.join(" ").slice(22)
        if(!DMReason)
        return message.reply("please provide some text!").then(m => m.delete({ timeout: 5000}));
        
        if(member){

           
            member.send(`<@${message.author.id}> send you a DM! \n ${DMReason}`)
            
        } 
    }
}

module.exports.config = {
    name: "Dm",
    description: "Dm a user",
    usage: "!Dm",
    accessableby: "Admins",
    aliases: ['DM','dM']
}

    


