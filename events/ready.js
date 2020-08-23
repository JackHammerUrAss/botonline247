const Discord = require("discord.js")
const bot = new Discord.Client();

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    function randomStatus() {
        let status = ["Apocolyptic Rust", "a!help", ` ${bot.users.cache.size} users!`, ` ${bot.guilds.cache.size} servers!`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "STREAMING", url: 'https://www.twitch.tv/grandmasterbot_twitch'});
    }; setInterval(randomStatus, 10000)

  
}