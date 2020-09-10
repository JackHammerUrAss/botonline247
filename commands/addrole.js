module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'))
    message.channel.send('you dont have permission to use this command');
 else {
    let epicRole = message.guild.roles.cache.get('743589337945604196');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}}

module.exports.config = {
    name: "addrole",
    description: "adds member role(default;member), to use this command simply type ```addrole'availabe role here'```, the availabe roles are linked in the pinged message in the staff channel",
    usage: "z!addrole",
    accessableby: "Members",
    aliases: []
}

