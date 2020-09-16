

const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['MUTE_MEMBERS'])) return;
    const member = message.mentions.members.first(); 
    if (!member) return message.channel.send('**!lockuser <@!id> || @user **')
    // the actual bot himself
    const BotRole = member.roles.cache.has('742644657590370387')

    if(BotRole) {
        message.channel.send('**well i could also just eliminate you**\nᵖˡᵉᵃˢᵉ ᵒⁿˡʸ ᵘˢᵉ ᵗʰⁱˢ ᶠᵒʳ ⁱᵗˢ ᵃᶜᵗᵘᵃˡ ᵖᵘʳᵖᵒˢᵉ')
    } else {

    // all roles that wont be able to get muted
    const botcoderRole = member.roles.cache.has('742695341232488459')
    const starRole = member.roles.cache.has('748302806301147156')

    if(botcoderRole || starRole) {
        message.channel.send('This user could not be muted')
    } else {
    //botcoder role, can not be heavy muted
    if(member.hasPermission(['MUTE_MEMBERS']) && !message.member.hasPermission('MUTE_MEMBERS')) return;
        //all roles consts
        let mutedRole = message.guild.roles.cache.get('748304191738609804');
        let verifiedRole = message.guild.roles.cache.get('743589337945604196');
        let TeamRole = message.guild.roles.cache.get('748914648673157200');

       

        if (mutedRole) {
            //roles remove or add 
            member.roles.add(mutedRole);
            member.roles.remove(communityRole);
            member.roles.remove(verifiedRole);
            member.roles.remove(TeamRole);

            message.channel.send("User was Successfully muted");

           
            const Moderation = message.guild.channels.cache.find(channel => channel.id === '743829943221354506')
            const embed = new Discord.MessageEmbed()
            .setTitle('A Member has been muted!')
            .setDescription(`user \`${member}\` has been muted by \`${message.author.tag}\`! `)
            .setFooter('APK',  bot.user.displayAvatarURL())
            .setTimestamp()
            Moderation.send(embed)
        }}
}}

module.exports.config = {
    name: "Prison",
    description: " this will lock someone ",
    usage: "!prison",
    accessableby: "Moderators",
    aliases: ['lockuser', 'lu', 'hm', 'hardmute', 'Hardmute', 'HM', 'HardMute', 'Lockuser', 'LockUser', 'LU', 'prison', 'prisonize']
}