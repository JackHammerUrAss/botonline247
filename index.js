
  
const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("messageReactionAdd", function(users) {
    users.addRole(users.guild.roles.find("id", 743588953273270332));
    users.removeRole(users.guild.roles.find("id", 743589460075085877));
});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("*help || MasterBot", {type: "STREAMING", url:"https://www.twitch.tv/grandmasterbot_twitch"});
})

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'gate')
    welcomeChannel.send (`Welcome! ${member}`)
})

bot.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'gate')
    welcomeChannel.send (`Goodbye! ${member}`)
})

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

    if(cmd === `${prefix}reactions`){
        let embed = new Discord.MessageEmbed()
        .setTitle('Reaction Roles')
        .setDescription('React to gain the role!')
        .setColor('PURPLE')
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('👾')
    }
})

bot.login(process.env.token);
