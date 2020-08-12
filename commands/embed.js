const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
     .setTitle('This is a test Embed.')
     .setURL('https://www.roblox.com/users/92044277/profile')
    
    message.channel.send(embed)
}

module.exports.config = {
    name: "embed",
    description: "",
    usage: "*embed",
    accessableby: "Members",
    aliases: []
}

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("*help || RustBot", {type: "WATCHING"});
})