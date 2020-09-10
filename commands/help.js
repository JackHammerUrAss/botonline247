const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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
            .setAuthor(`Here are the Avaible Commands to use:`)
                .setThumbnail('https://lh3.googleusercontent.com/9MqtYaV8CA1YmuZ4xo05hoMrbzskV9tsjc7HWA7F5sx-gjeA1Dm56fDqTHPH--j5DQ-OpA=s85')
                .addFields(
                { name: 'Prefix', value: '```a!```', inline: true},
                { name: 'Basic Commands', value: '**a!invite** | sends the bot invite link \n **a!online** | Tells if the bot is online \n **a!website** | Sends the website link'},
                { name: 'Voice Commands (only works when VM is installed)', value: '**v!voice setup** | sets up the voice channels ( admin command )\n**v!invite** | VM invite link \n**v!lock** | locks VC \n**v!unlock** | Unlocks VC \n**v!voice name <name>** | change the vc name \n**v!voice limit <limit>** \n**v!voice claim** | claim a vc \n**v!voice permit <@user>** | add a user to your vc \n**v!voice deny <@user>** | deny a user from joining your vc'},
                { name: 'Staff Commands', value: '**a!cm** | Creative Managers (manage_messages permission) \n**a!mute** | mutes member \n**a!unmute** | unmutes a member'},
                { name: 'Music Commands (hydra)', value: '**p!play {song name}** | plays your song ( only work with the music role \n'}            )
            .setColor('#00FFF3')
            .setFooter('APK', bot.user.displayAvatarURL())
            
        message.channel.send(embed);
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

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "a!help",
    accessableby: "Members",
    aliases: []
}