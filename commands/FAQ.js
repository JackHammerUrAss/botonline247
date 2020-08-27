const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('SEND_MESSAGES'))
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
            { name: '**FAQ**', value: 'we get a lot of questions about applying on our sever, this and several other questions will be answered in this faq \n you can also find the questions on our website', inline: true},
        )
        .setTimestamp()
            
        
       
       message.channel.send(embed);
        
         
    }
}


module.exports.config = {
    name: "faq",
    description: "sends a faq embed",
    usage: "a!faq",
    accessableby: "Verified members",
    aliases: []
}