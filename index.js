const Discord = require('discord.js');

const prefix = '*';

const fs = require('fs');

const client = new Discord.client();

client.once('ready', () => {
    console.log('MasterBot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }
});










client.login(process.env.token);