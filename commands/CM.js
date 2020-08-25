const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
        message.channel.send("You don't have permission to use that command.");
     else {
        const embed = new Discord.MessageEmbed()
        .setTitle('**Welcome to announcements**')
        .setURL('https://dolfinroemer.wixsite.com/apocolyptic-knights')
        .setAuthor("www.ApocolypticKnights.com")
        .setColor('FFE8E8')
        .setThumbnail('https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
        .setFooter('ApkBot', 'https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
        .addFields(
            { name: '**Announcements channel**', value: 'click the link below the connect the channel to your server! \n you will receive news from our bot progress,\n server progress \nwebsite progress \n as well as giveaways and other fun stuff! \n to apply to APK head over to our website!', inline: true},
        )
        .setTimestamp()
            
        
       
       message.channel.send(embed);
        
         
    }
}


module.exports.config = {
    name: "Creative Manager",
    description: "sends a link",
    usage: "a!cm",
    accessableby: "Creative Managers",
    aliases: ['cm']
}