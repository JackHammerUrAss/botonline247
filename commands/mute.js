

const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['MUTE_MEMBERS'])) return; message.channel.send('you dont have enough permission to use this command')
    const member = message.mentions.members.first(); 
    if (!member) return message.channel.send('**!lockuser <@!id> || @user **')
    // the actual bot himself
    const BotRole = member.roles.cache.has('742644657590370387')

    if(BotRole) {
        message.channel.send('**well i could also just eliminate you**\nᵖˡᵉᵃˢᵉ ᵒⁿˡʸ ᵘˢᵉ ᵗʰⁱˢ ᶠᵒʳ ⁱᵗˢ ᵃᶜᵗᵘᵃˡ ᵖᵘʳᵖᵒˢᵉ')
    } else {

    // all roles that wont be able to get muted
    const CTORole = member.roles.cache.has('742695341232488459')
    const PRM = member.roles.cache.has('748675151888908320')
    const starRole = member.roles.cache.has('748302806301147156')
    const CDC = member.roles.cache.has('747520388979753070')

    if(CTORole || starRole || PRM || CDC  ) {
        message.channel.send('This user could not be muted')
    } else {
    //botcoder role, can not be heavy muted
    if(member.hasPermission(['MUTE_MEMBERS']) && !message.member.hasPermission('MUTE_MEMBERS')) return;
        //all roles consts
        let mutedRole = message.guild.roles.cache.get('748304191738609804');
        let verifiedRole = message.guild.roles.cache.get('743589337945604196');
        let TeamRole = message.guild.roles.cache.get('748914648673157200');
        let botCoder = message.guikd.roles.cache.get('755863093271068733');
        let ProgramManager = message.guikd.roles.cache.get('748674943838978079');
        let ManagerTrainee = message.guikd.roles.cache.get('748674934296936471');
        let Supervisor = message.guikd.roles.cache.get('748674942673092771');
        let  Security = message.guikd.roles.cache.get('748675262769791047');

        if (mutedRole) {
            //roles remove or add 
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            member.roles.remove(TeamRole);
            member.roles.remove(botCoder);
            member.roles.remove(ProgramManager);
            member.roles.remove(ManagerTrainee);
            member.roles.remove(Supervisor);
            member.roles.remove(Security);

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