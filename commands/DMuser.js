const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }
    
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
            var serverIcon = message.guild.iconURL();
           const DmEmbed = new Discord.MessageEmbed()
           .setDescription(`**You got mail!**  `)
           .setColor('#AABBE8')
           .addField('from guild:', `${message.guild.name}`,true )
           .addField('Message:',DMReason)
           .addField(`from user: `,`**<@${message.author.id}> **`)
           .setAuthor('Astro','https://www.iconfinder.com/data/icons/thick-outlines-online-project-basics/128/20-blue_message-contact-envelope-email-512.png')
           .setFooter('DM', serverIcon)
           .setTimestamp();
           member.send(DmEmbed)
           const WelcomeChannel = member.guild.channels.cache.find(channel => channel.id === '753732052389462046')
           if (!WelcomeChannel) return
          WelcomeChannel.send (` <@${message.author.id}>,  ${member} received your message!`).then(m => m.delete({ timeout: 5000}));
          
          
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

    


