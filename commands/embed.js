const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
     .setTitle('This is a test Embed.')
     .setURL('https://www.roblox.com/users/92044277/profile')
     .setAuthor("beep")
     .setDescription("This is a Test Description")
     .setColor('#bb53fc')
     .setThumbnail('https://www.sammobile.com/wp-content/uploads/2019/10/Battery-Guardian.png')
     .setImage('https://www.sammobile.com/wp-content/uploads/2019/10/Battery-Guardian.png')
     .setFooter('This is a footer example', 'https://www.sammobile.com/wp-content/uploads/2019/10/Battery-Guardian.png')
     .addFields(
         { name: 'test number 1', value: 'this is a example value', inline: true},
         { name: 'test number 2', value: 'this is a example value', inline: true}
     )
     .setTimestamp()
         
     
    
    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "",
    usage: "*embed",
    accessableby: "Members",
    aliases: []
}
