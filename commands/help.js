const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Help is on the way!")
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "*help",
    accessableby: "Members",
    aliases: ['help']
}