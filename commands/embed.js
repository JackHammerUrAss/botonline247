const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

odule.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed();
        .setTitle("this is a test Embed")
    
    message.channel.send(embed)
}

module.exports.config = {
    name: "embed",
    description: "",
    usage: "*embed",
    accessableby: "Members",
    aliases: []
}
