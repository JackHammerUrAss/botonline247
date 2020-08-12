const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Click on my name and then on 'watch'!")
}

module.exports.config = {
    name: "Twitch",
    description: "twitch location",
    usage: "*Twitch",
    accessableby: "Members",
    aliases: ['Twitch']
}