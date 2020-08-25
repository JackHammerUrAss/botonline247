const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
        message.channel.send("You don't have permission to use that command.");
     else {
        const embed = new Discord.MessageEmbed()
        .setTitle('**------------------------**')
        .setURL('https://dolfinroemer.wixsite.com/apocolyptic-knights')
        .setAuthor("www.ApocolypticKnights.com")
        .setColor('FFE8E8')
        .setThumbnail('https://lh3.googleusercontent.com/xP0pfWaYe_6pXGp35gL37_pbSsjfNZLYlCi6fpSlxoFZ8B9yaMb_Y5CgmfZLyeUsv9E4=s85')
        .setFooter('ApkBot', 'https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
        .addFields(
            { name: '**You are a Creative Manager?**', value: 'and you dont exacly know what to do or expect? \n we will help you a bit on that: \n you can click the blue line above to go the webpage with a very clear explanation on what to do.', inline: true},
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