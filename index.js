const Discord = require('discord.js');

const prefix = '*';

const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('')

client.once('ready', () => {
    console.log('MasterBot is online!');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){


    } else if (command == 'youtube'){

    }
})






client.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    const Discord = 'embed';

    switch(args[0]){
        case 'embed':
            const embed = new MessageEmbed()
            .setTitle('User Information')
            .addField('Discord Name', message.author.username)
            .addField('Current Server', message.guild.name)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.displayAvatarURL());
            message.channel.send(embed);
        break;


    }
})


client.login(process.env.token);