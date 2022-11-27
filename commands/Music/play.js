module.exports = {
    name: "play",
    aliases: ["p"],
    inVoiceChannel: true,
    run: async (client, message, args, prefix) => {
        
        if (!args.length) return message.reply(`❌ | Pone un tema capoeira`)
   
        client.distube.play(message.member.voice.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        });
    }
}
