const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You dont have permission to use this command /:');
    const user = message.mentions.members.first();
    if(!user) return message.channel.send('Please specify a user you would like to give a role to')
    const role = message.mentions.roles.cache.find(roles => roles.name === 'role_name')
    if(!role) return message.channel.send('Please specify a role you like to give to the Mentioned user')
    await user.roles.add(role), message.channel.send(`${user} now has the ${role} role`)
}

module.exports.config = {
    name: "addrole",
    description: "adds member role(default;member), to use this command simply type ```addrole'availabe role here'```, the availabe roles are linked in the pinged message in the staff channel",
    usage: "z!addrole",
    accessableby: "Members",
    aliases: ["ar"]
}

