const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});


bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'moderation')
    const embed = new Discord.MessageEmbed()
          .setTitle('A New User joined the discord')
          .setDescription(`user ${member} Joined `)
          .setFooter('APK',  bot.user.displayAvatarURL())
          .setTimestamp()
          .setColor('#3FF392')
          if (!welcomeChannel) return;
    welcomeChannel.send(embed)
})

bot.on("guildMemberRemove", member => {
   const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'moderation')
   const embed = new Discord.MessageEmbed()
          .setTitle('A User has left the Discord')
          .setDescription(`user ${member} has Left `)
          .setFooter('APK',  bot.user.displayAvatarURL())
          .setTimestamp()
          .setColor('#70C195 ')
          if (!welcomeChannel) return;
   welcomeChannel.send(embed)
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
    let cmd = messageArray[0].toLowerCase();
    //let args1 = messageArray.slice(1);
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args )
    if(cmd === `${prefix}tj`){
        let embed = new Discord.MessageEmbed()
        .setThumbnail('https://lh3.googleusercontent.com/proxy/n8IggMqZu5l1ejpMxKerqUMEuLtquHMOjg1ymLpOXBZKuDWnXvGxVHf1fekv21ltfULRx3kJKM_h5jmnn-9EzMJ2jqy8ZjFbELUoBHKi1BYkANopLGimQa-TDw')
        .setAuthor('Welcome!', 'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png')
        .setColor('#E8AAD9')
        .setDescription( "----------------------\n __**Astro Studios**__\n\nThe Official Astro Discord has quite a few members, so to keep the server safe and happy, there needs to be a set of rules.\n\n•**Discord ToS**\n*You must follow all of Discord's Terms of Service and Community Guidelines. If you haven't already, make sure to*\n*read them here:*\nhttps://discord.com/terms\nhttps://discord.com/guidelines\n\n**To Verify, please click the emote right underneath this embed!**\n-Rules are listed in #rules\nthsis bot was made by jack#6969 ")
        .setFooter('Astro Studios', bot.user.displayAvatarURL())
        .setTimestamp()
         let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('✅')
        //• No Spam in Text Chat (or) Voice Chat \n • Please do not use all CAPS...we can read your message just fine without it\n • No harassment, racism or hate speech of any kind...it will not be tolerated\n • Respect Admins as well as fellow discord users\n • No linking to other discord channels or advertising of any kind to any members\n • No pornography, violent or disturbing links, pictures or videos\n • Dont tell admins how to admin\n • No channel hopping. Which is joining multiple channels in a short time\n • Be respectful of others in voice & text chat\n • Keep text chats ON topic. Example: Suggestions in #suggestions chat\n • Admins reserve the right to mute/ban anyone as they see fit\n
    } //https://dolfinroemer.wixsite.com/apocolyptic-knights

})

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === "743069846685614141"){
      if (reaction.emoji.name === '✅'){
          await reaction.message.guild.members.cache.get(user.id).roles.add('743589337945604196')
          const welcomeChannel = reaction.message.guild.channels.cache.find(channel => channel.id === '743829943221354506')
          const embed = new Discord.MessageEmbed()
          .setTitle('A new user has verified!')
          .setAuthor(reaction.user.displayAvatarURL())
          .setColor('#F7F65E ')
          .setDescription(`user ${user} has verified `)
          .setFooter('Orion',  bot.user.displayAvatarURL())
          .setTimestamp()
          welcomeChannel.send(embed);
      }  
    }
})

bot.on('messageReactionRemove', async (reaction,user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === "743069846685614141"){
       if (reaction.emoji.name === '✅'){
          await reaction.message.guild.members.cache.get(user.id).roles.remove('743589337945604196')
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
        .setTitle('**ANOUNCEMENT**')
        .setThumbnail('https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
        .setDescription(pollDescription)
        .setColor('#36ECE0')
        .setFooter('ZincBot', 'https://lh3.googleusercontent.com/2acydHF2nIOwboZ3a26ISfTaoSXud0e5pTxAvzrSGHu--Vul0pitDj0oK4yH4y8NJaXUCno=s85')
        .setTimestamp()
        let msgEmbed = await pollChannel.send(embedPoll);
    }
})


bot.login(process.env.token);