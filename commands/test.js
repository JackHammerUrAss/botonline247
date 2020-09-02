const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd ===  `a!test`){


        let rUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Couldn't find user.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.MessageEmbed()
        .setDescription("test")

        let reportChannel = message.guild.channels.cache.find(`moderation`)
        if(!reportChannel) return message.channel.send("couln't find reports channel.")

        message.delete().catch(O_o=>{});
        reportshannel.send(reportEmbed)
        return;
    }}

    module.exports.config = {
        name: "test",
        description: "",
        usage: "a!test",
        accessableby: "Moderators",
        aliases: []
    }