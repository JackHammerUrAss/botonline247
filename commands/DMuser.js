const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    let DMChannel = member.guild.cache.find(channel => channel.id = '753732052389462046')
    if (!DMChannel) return message.channel.send("Can't Find channel with channel id equal to 753732052389462046 ")
    
    let messageArray = message.content.split(" ");
    let args2 = messageArray.slice(1)

    if(!message.member.hasPermission('ADMINISTRATOR')) 
        message.channel.send("You don't have permission to use that command.").then(m => m.delete({ timeout: 5000}));
    else {
    
        let member = message.guild.members.cache.get(args[0]) || message.guild.member(message.mentions.members.first()); 
        if(!member)
        return message.reply("please mention a user or userID").then(m => m.delete({ timeout: 5000}));

        let DMReason = args2.join(" ").slice(22)
        if(!DMReason)
        return message.reply("please provide some text!").then(m => m.delete({ timeout: 5000}));
        
        if(member){

           const DmEmbed = new Discord.MessageEmbed()
           .setDescription(`**You got a DM from user:** <@${message.author.id}>  `)
           .setColor('D95EF7')
           .addField('Message:',DMReason)
           .setAuthor('APK','https://img.pngio.com/send-and-receive-direct-messages-for-instagram-from-instagram-instagram-direct-png-820_391.png')
           .setTimestamp();
           member.send(DmEmbed)
           message.channel.send (`${member} received your message!`).then(m => m.delete({ timeout: 5000}));
          
          
            // member.send(`<@${message.author.id}> send you a DM! \n ${DMReason}`)
            
        } 
    }
}

module.exports.config = {
    name: "Dm",
    description: "Dm a user",
    usage: "!Dm",
    accessableby: "Admins",
    aliases: ['DM','dM', 'dm']
}

    


