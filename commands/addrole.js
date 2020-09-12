const { DiscordAPIError } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_ROLES'))
    message.channel.send('you dont have permission to use this command');
 else {
    let epicRole = message.mentions.members.cache.first() || message.guild.members.cache.find(m => m.user.tag === args[0] || message.guild.members.cache.get(args[0]))
    if (!epicRole) return message.channel.send("Please provide a user to add a role to.")
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.cache.first()
    if(!role) return message.channel.send("Please provide a role to add to said user.")
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Please provide a reason/argument")
    
    if(!message.guild.me.hasPermission('ADMINISTRATOR', 'MANAGE_ROLES')) return  message.channel.send('you dont have permission to perform');

    if(epicRole.roles.has(role.id)) {
        return message.channel.send(`${epicRole.displayName}, already has provided role`)
    } else {
        await epicRole.addrole(role.id).catch(e => console.log(e.message))
        message.channel.send(`The role, ${role.name}, has been added to ${epicRole.displayName}.`)
    }

    const member = message.mentions.members.first();


}}

module.exports.config = {
    name: "addrole",
    description: "adds member role(default;member), to use this command simply type ```addrole'availabe role here'```, the availabe roles are linked in the pinged message in the staff channel",
    usage: "z!addrole",
    accessableby: "Members",
    aliases: ["ar"]
}

