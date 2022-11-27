const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    inVoiceChannel: true,
    run: async (client, message, args) => {

      const queue = client.distube.getQueue(message)

      if (!queue) return message.reply(`❌ | Ta vacía la lista`)

      const song = queue.songs[0]
      
      const embed = new EmbedBuilder()
        .setColor('Random')
        .setDescription(`▶️ | Me estoy tocando: \`${song.name}\` - Minuto: \`${queue.formattedCurrentTime}\``)
        .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})   
        message.channel.send({ embeds: [embed]})
    }
  }