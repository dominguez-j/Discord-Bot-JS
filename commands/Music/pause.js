module.exports = {
    name: 'pause',
    aliases: ['pause', 'hold'],
    inVoiceChannel: true,
    run: async (client, message) => {

      const queue = client.distube.getQueue(message)

      if (!queue) return message.reply(`❌ | Ta vacía la lista`)

      queue.pause()
      
      message.reply('Pausado para vos petón')
    }
  }