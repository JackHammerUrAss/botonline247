const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.bot || message.channel.type === "dm") return
    
    if (message.deletable) {
        message.delete();
    }

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args1 = messageArray.slice(1);

    if (cmd === '!ba'){
         if(!message.member.hasPermission(['ADMINISTRATOR'])){return message.channel.send('You dont have enough permission to use this command!').then(m => m.delete({ timeout: 5000}))};
        }
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args1.slice(1).join(' ');
        
        if(!pollChannel) {
            return message.channel.send("Please add a valid channel ").then(m => m.delete({ timeout: 5000}))
        }

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('New bot update!')
        .setThumbnail('https://img.icons8.com/plasticine/2x/approve-and-update.png')
        .setDescription(pollDescription)
        .setColor('#FFE8E8')
        let msgEmbed = await pollChannel.send(embedPoll);
    
    }



module.exports.config = {
    name: "botannounce",
    description: "makes a poll (a!poll channel text",
    usage: "!botannounce",
    accessableby: "Members",
    aliases: ['ba', 'BA', 'Botannounce', 'BotAnnounce']
}