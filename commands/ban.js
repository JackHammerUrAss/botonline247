const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
let messageArray = message.content.split(" ");
let args = messageArray.slice(1)

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");
    else {
        let member = message.guild.members.cache.get(args[0]) || message.guild.member(message.mentions.members.first()); 
        if(!member){
            return message.reply('Please state a user or userID')}
        let bReason = args.join(" ").slice(22)
        
        if(member){

        try {
            await member.ban();
            console.log(member.tag + " was banned.");
            message.channel.send (`${member} Have been Banned from The Server!`)

            let banEmbed = new Discord.MessageEmbed()
            .setDescription("ban")
            .setColor('#e56b00')
            .addField("Banned User", `${member} with ID ${member.id}`)
            .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Banned in", message.channel)
            .addField("reason", bReason)
            .timestamp();

            let banChannel = member.guild.channels.cache.find(channel => channel.id === '749752743710687282')
            if(!banChannel) return message.channel.send("Can't find incidents channel.")

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
    aliases: []
}