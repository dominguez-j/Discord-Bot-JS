const {EmbedBuilder} = require('discord.js');
module.exports ={
    name: 'ping',
    run: async (client, message) => {
        const embed = new EmbedBuilder()
        .setColor('Random')
        .setDescription(`**PONG!**🏓Latencia: ${Date.now() - message.createdTimestamp}ms. API Latencia: ${Math.round(client.ws.ping)}ms`)
        message.channel.send({ embeds: [embed]})
    }
};