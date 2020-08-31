const Discord = require("discord.js");
const privateMessage = require("../commands/private-message");
const bot = new Discord.Client();

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)

    privateMessage(bot, 'support', 'CODING ATM \nThis feature will be availabe for future use')

    bot.users.fetch('291999202249146370').then((user) => {
        user.send('im online')
    })

    function randomStatus() {
        let status = ["Apocolyptic Rust", "a!help", ` over ${bot.users.cache.size} users!`, ` over ${bot.guilds.cache.size} servers!`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 10000)

  
}