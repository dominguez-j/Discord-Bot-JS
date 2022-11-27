module.exports = {
    name: 'resume',
    aliases: ['resume', 'unpause'],
    inVoiceChannel: true,
    run: async (client, message) => {

      const queue = client.distube.getQueue(message)

      if (!queue) return message.reply(`❌ | Ta vacía la lista`)
      
      if (queue.paused) {
        queue.resume()
        message.reply('Tomá mogolón')
      } else {
        message.reply('No ta pausado salamín')
      }
    }
  }