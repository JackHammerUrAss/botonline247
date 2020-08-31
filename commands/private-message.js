const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports = (client, triggerText, replyText) => {
    client.on('message', (message) => {
      if (
        //message.channel.type === 'dm' &&
        message.content.toLowerCase() === triggerText.toLowerCase()
      ) {
        message.author.send(replyText)
      }
    })
  }

  
module.exports.config = {
    name: "support",
    description: "Dm's",
    usage: "support",
    accessableby: "everyone",
    aliases: ['support']
}