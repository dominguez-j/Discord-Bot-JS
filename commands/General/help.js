const {EmbedBuilder} = require('discord.js');
module.exports = {
    name: "help",
    aliases: ["h", "cmd"],
    run: async (client, message) => {
        const embed = new EmbedBuilder()
            .setTitle("Commands")
            .setColor('Random')
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
        message.channel.send({ embeds: [embed]})
    }
}
