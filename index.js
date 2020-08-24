const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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
    let cmd = messageArray[0].toLowerCase();
    //let args = messageArray.slice(1);
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
    if(cmd === `${prefix}tj`){
        let embed = new Discord.MessageEmbed()
        .setTitle('***VERIFICATION EMBED***')
        .setURL('https://dolfinroemer.wixsite.com/apocolyptic-knights')
        .setAuthor('Welcome!', 'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png')
        .setColor('FFE8E8')
        .addFields(
            {name: '**RULES**',value: '- \n -\n -'}
        )
        .setFooter('please react to this Embed to verify', 'https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
         let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('✅')
     

    }

})

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === "746852142307999792"){
      if (reaction.emoji.name === '✅'){
          await reaction.message.guild.members.cache.get(user.id).roles.add('746852382666916002')
      }  
    }
})

bot.on('messageReactionRemove', async (reaction,user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === "746852142307999792"){
        if (reaction.emoji.name === '✅'){
          await reaction.message.guild.members.cache.get(user.id).roles.remove('746852382666916002')
        }  
    }
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    if (cmd === 'a!announce'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('***ANOUNCEMENT***')
        .setDescription(pollDescription)
        .setColor('#36ECE0')
        .setFooter('ZincBot', 'https://lh3.googleusercontent.com/2acydHF2nIOwboZ3a26ISfTaoSXud0e5pTxAvzrSGHu--Vul0pitDj0oK4yH4y8NJaXUCno=s85')
        .setTimestamp()
        let msgEmbed = await pollChannel.send(embedPoll);
    }
})


bot.login(process.env.token);