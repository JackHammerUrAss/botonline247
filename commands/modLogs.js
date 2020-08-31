const roles = ['Founder']

module.exports = (client) => {
  const channelId = '743829943221354506'

  client.on('message', (message) => {
    const { guild, content, member } = message

    if (member.user.bot) {
      console.log('Ignoring bot')
      return
    }

    const hasRole = member.roles.cache.find((role) => {
      return roles.includes(role.name)
    })

    if (hasRole) {
      const channel = guild.channels.cache.get(channelId)
      channel.send(`<@${member.id}> said this:
      
"${content}"`)
    }
  })
}


module.exports.config = {
    name: "modlogs",
    description: "modlogging",
    aliases: []
}