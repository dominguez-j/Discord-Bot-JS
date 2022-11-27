const config = require("../config.json");
const prefix = config.prefix    
module.exports = (client, message) => {      

        if(message.author.bot || !message.guild || !message.channel) return;
        if(message.guild.type === "DM") return;
        if(!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

        if(!cmd) return;

        if(cmd.inVoiceChannel && !message.member.voice.channel)
            return message.reply("❌| Master tenes q estar en un voice")

        if(cmd.inVoiceChannel && message.guild.members.me.voice.channel && message.member.voice.channel.id != message.guild.members.me.voice.channel.id) 
            return message.reply(`❌| Sos re chistoso, toy en otro voice genio`);
    
    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    });

    if(cmd)
        cmd.run(client, message, args, prefix)
    else
       return message.channel.send("Ese comando no existe");
}