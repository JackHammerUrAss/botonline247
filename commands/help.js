const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Server Help for ${message.guild.name}`)
                .setThumbnail('https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
                .setDescription("Orion commands in this server start with `!`\n commands are used for moderators or members")
                .addFields(
                    { name: '**Help & Support**', value: '[guides](https://dolfinroemer.wixsite.com/apocolyptic-knights/faq) \n[Commands List](https://dolfinroemer.wixsite.com/orion/lege-pagina-1) \n[Recent updates](https://dolfinroemer.wixsite.com/apocolyptic-knights/lege-pagina)' , inline: true}, 
                   )
            .setColor('#00FFF3')
            .setFooter('Astro', bot.user.displayAvatarURL())
            
        message.author.send(embed);
        message.channel.send('Send You a DM!').then(m => m.delete({ timeout: 5000}));
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('#00FFF3')

        message.author.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "!help",
    accessableby: "Members",
    aliases: ['h']
}