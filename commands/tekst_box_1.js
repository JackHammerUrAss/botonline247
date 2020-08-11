bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0]){
        case "poll":
            const Embed = new MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("initiate Poll")
            .setDescription("*poll to initiate a simple yes or no poll");

            if(!args[1]){
                message.channel.send(Embed);
            }
        break;
            
    }
})