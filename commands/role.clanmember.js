module.exports= {
    name: 'youtube',
    description: "sends the youtube link",
    execute(message, args) {

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('you have the permission to kick members');
        } else {
            message.channel.send('you Dont have the permission to kick members!');
        }

        if(message.member.roles.cache.has('742704315021393921')){
            message.channel.send('http://youtube.com')

        } else {
            message.channel.send('it seems like you miss some roles buddy, let me change that');
            message.member.roles.add('742704315021393921');
        }
        
    }
}