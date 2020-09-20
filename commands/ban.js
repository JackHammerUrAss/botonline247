const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {

  

    let messageArray = message.content.split(" ");
    let args2 = messageArray.slice(1)

    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.").then(m => m.delete({ timeout: 5000}));
    else {
        let member = message.guild.members.cache.get(args[0]) || message.guild.member(message.mentions.members.first()); 
        if(!member){
            return message.reply('Please state a user or userID').then(m => m.delete({ timeout: 5000}))};
        let bReason = args2.join(" ").slice(22)
        
        if(member){

        try {
            await member.ban();
            console.log(member.tag + " was banned.");
            message.channel.send (`${member} Have been Banned from The Server!`).then(m => m.delete({ timeout: 5000}));

            let banEmbed = new Discord.MessageEmbed()
            .setDescription("ban")
            .setColor('#e56b00')
            .addField("Banned User", `${member} with ID ${member.id}`)
            .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Banned in", message.channel)
            .addField("time", message.createdAt)
            .addField("reason", bReason)
            .setTimestamp();

            let banChannel = member.guild.channels.cache.find(channel => channel.id === '749752743710687282')
            if(!banChannel) return message.channel.send("Can't find incidents channel.").then(m => m.delete({ timeout: 5000}));

            banChannel.send(banEmbed)
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
    aliases: ['b']
}