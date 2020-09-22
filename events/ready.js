const Discord = require("discord.js");
const privateMessage = require("../commands/private-message");
const bot = new Discord.Client();

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)

    privateMessage(bot, 'help', 'no thanks' )

    bot.users.fetch('291999202249146370').then((user) => {
        user.send('im online')
    })

    function randomStatus() {
        let status = ["Life Support Systems || !help", "!help for help || !help", ` over ${bot.users.cache.size} users! || !help`, ` over ${bot.guilds.cache.size} servers! || !help`,' over general conversation || !help']
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 10000)

  
}