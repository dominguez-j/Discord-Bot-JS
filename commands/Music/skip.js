const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "skip",
    aliases: ["s"],
    inVoiceChannel: true,
    run: async (client, message, prefix) => {

        const queue = client.distube.getQueue(message)

        if (!queue) return message.reply("No hay nada pa skipear nabo")
        
        try {
            const song = await queue.skip()
            
            const embed = new EmbedBuilder()
            .setColor('#Random')
            .setDescription(`✅ | Skippeado pa | Reproduciendose:\n${song.name}`)     
            message.channel.send({ embeds: [embed]})
        }
        catch (e) {
            message.reply("No hay nada pa skipear nabo, me voy")
            client.distube.voices.leave(message)
        } 
    }
}
