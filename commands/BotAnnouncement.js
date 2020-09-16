const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.bot || message.channel.type === "dm") return
    
    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];


    if (cmd === '!ba'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('New bot update!')
        .setDescription(pollDescription)
        .setColor('#FFE8E8')
        let msgEmbed = await pollChannel.send(embedPoll);
    
    }

}

module.exports.config = {
    name: "botannounce",
    description: "makes a poll (a!poll channel text",
    usage: "!botannounce",
    accessableby: "Members",
    aliases: ['ba', 'BA', 'Botannounce', 'BotAnnounce']
}