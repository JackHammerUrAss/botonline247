const Discord = require("discord.js")
const bot = new Discord.Client();

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    function randomStatus() {
        let status = ["Apocolyptic Rust", "a!help", ` over ${bot.users.cache.size} users!`, ` over ${bot.guilds.cache.size} servers!`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 10000)

  
}