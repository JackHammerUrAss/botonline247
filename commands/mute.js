module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['MUTE_MEMBERS'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['MUTE_MEMBERS']) && !message.member.hasPermission('MUTE_MEMBERS')) return;

        let mutedRole = message.guild.roles.cache.get('748304191738609804');
        let verifiedRole = message.guild.roles.cache.get('743589337945604196');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send("User was Successfully muted.");
        }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "a!mute",
    accessableby: "Moderators",
    aliases: []
}