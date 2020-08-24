const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.bot || message.channel.type === "dm") return
    
    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];

    if (cmd === 'a!poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = message.content.substring(message.content.indexOf(' ')+1);

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('#Team Zinc')
        .setDescription(pollDescription)
        .setColor('#FFE8E8')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('✅')
        await msgEmbed.react('❎')
    }

}

module.exports.config = {
    name: "poll",
    description: "makes a poll (a!poll channel text",
    usage: "a!poll",
    accessableby: "Members",
    aliases: ['p']
}