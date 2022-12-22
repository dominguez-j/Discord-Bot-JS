const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "queue",
    run: async (client, message, prefix) => {
        
        const queue = client.distube.getQueue(message)

        if (!queue) return message.reply(`❌ | Ta vacía la lista`)   

        const q = queue.songs.map((song, i) => `${i === 0 ? "Reproduciendo:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")

        const embed = new EmbedBuilder()
        .setColor('Random')
        .setDescription(`📄 | **Lista de reproducción**\n${q}`)     
        message.channel.send({ embeds: [embed]})
    }
}
