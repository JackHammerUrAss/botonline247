const Discord = require('discord.js');

const prefix = '*';

const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('MasterBot is online!');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);


    } else if (command === 'user'){
        client.commands.get('user').execute(message, args);
    

    } else if (command == 'youtube'){}
});





client.login(process.env.token);
