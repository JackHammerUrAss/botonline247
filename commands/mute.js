
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['MUTE_MEMBERS'])) return;
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['MUTE_MEMBERS']) && !message.member.hasPermission('MUTE_MEMBERS')) return;

        let mutedRole = message.guild.roles.cache.get('748304191738609804');
        let verifiedRole = message.guild.roles.cache.get('743589337945604196');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send("User was Successfully muted.");
            const welcomeChannel = message.guild.channels.cache.find(channel => channel.id === '743829943221354506')
            const embed = new Discord.MessageEmbed()
                  .setTitle('A Member has been muted!')
                  .setDescription(`user \`${member.tag}\`has been muted by \`${message.author.tag}\`! `)
                  .setFooter('APK',  bot.user.displayAvatarURL())
                  .setTimestamp()
                  .setColor('#F75EC4')
                  if (!welcomeChannel) return;
            welcomeChannel.send(embed)
        }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "a!mute",
    accessableby: "Moderators",
    aliases: ['m']
}