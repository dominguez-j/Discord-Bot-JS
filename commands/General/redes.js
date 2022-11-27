const {EmbedBuilder} = require('discord.js');
module.exports ={
    name: 'redes',
    run: async (client,message) =>{
        const embed = new EmbedBuilder()
            .setTitle("Mis Redes")
            .setColor('Random')
            .setDescription(`Twitch: https://www.twitch.tv/chonx
            Instagram: https://www.instagram.com/chon__d/
            Github: https://github.com/chondominguez/
            LinkedIn: https://www.linkedin.com/in/-jonathandominguez/`)
            message.channel.send({ embeds: [embed]})
    },
};