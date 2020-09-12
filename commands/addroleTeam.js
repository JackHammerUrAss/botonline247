module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
    message.channel.send("You don't have permission to use that command.");
 else {
    let epicRole = message.guild.roles.cache.get('748914648673157200');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}}

module.exports.config = {
    name: "addTeam",
    description: "adds member role(default;member), to use this command simply type ```addrole'availabe role here'```, the availabe roles are linked in the pinged message in the staff channel",
    usage: "-addrole1",
    accessableby: "Members",
    aliases: ['raTeam']
}