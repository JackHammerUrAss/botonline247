const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
     .setTitle('**Welcome to announcements**')
     .setURL('https://dolfinroemer.wixsite.com/apocolyptic-knights')
     .setAuthor("https://dolfinroemer.wixsite.com/apocolyptic-knights")
     .setColor('FFE8E8')
     .setThumbnail('https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
     .setFooter('This is a footer example', 'https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
     .addFields(
         { name: '**Announcements channel**', value: 'click the link below the connect the channel to your server! \n you will receive news from our bot progress, server progress and website progress \n as well as giveaways and other fun stuff! \n to apply to APK head over to our website!', inline: true},
     )
     .setTimestamp()
         
     
    
    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "",
    usage: "a!embed",
    accessableby: "Members",
    aliases: []
}
