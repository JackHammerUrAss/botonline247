const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
     .setTitle('GrandMasterBot_Twitch.')
     .setURL('https://www.twitch.tv/grandmasterbot_twitch')
     .setAuthor("MasterBot")
     .setDescription("click the link above to gain acces to the twitch account!")
     .setColor('#bb53fc')
     .setThumbnail('https://www.sammobile.com/wp-content/uploads/2019/10/Battery-Guardian.png')
     .setFooter('', 'https://www.sammobile.com/wp-content/uploads/2019/10/Battery-Guardian.png')
     .addFields(
         { name: 'Rust', value: 'Every monday', inline: true},
         { name: 'Music', value: 'any random moment ', inline: true}
     )
     .setTimestamp()
         
     
    
    message.channel.send(embed);
}

module.exports.config = {
    name: "twitch",
    description: "",
    usage: "*twitch",
    accessableby: "Members",
    aliases: []
}
