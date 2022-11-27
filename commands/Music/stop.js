module.exports = {
    name: "stop",
    aliases: ["leave"],
    inVoiceChannel: true,
    run: async (client, message) => {

        const queue = client.distube.getQueue(message);

        if(!queue) return message.reply("No hay nada reproduciendose, todo bien por casa?")
            
        client.distube.voices.leave(message)
    }
}
