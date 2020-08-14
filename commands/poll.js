const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    if (cmd === '*poll'){
        let pollChannel = message.mentions.channel.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle ('New Poll')
        .setDescription(pollDescription)
        .setColor('YELLOW')
        pollChannel.send(embedPoll)
    }
}