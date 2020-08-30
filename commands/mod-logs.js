const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const roles = ['Founder']

module.exports.run = (client) => {
    client.on('message', message => {
        const { content } = message

        console.log(content)
    })
}

module.exports.config = {
    name: "logging",
    description: "",
    usage: "?",
    accessableby: "Members",
    aliases: ['']
}