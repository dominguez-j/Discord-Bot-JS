const fs = require('fs');
const {EmbedBuilder,AttachmentBuilder} = require('discord.js');
let kk = 0;
module.exports ={
    name: 'pichula',
    run: async (client, message) => {
        text = fs.readdirSync("./commands/Pichulas/Fotos/");
        kk = Math.floor(Math.random() * text.length);
        const file = new AttachmentBuilder("./commands/Pichulas/Fotos/"+text[kk])
        const embed = new EmbedBuilder()
        .setColor("Random")    
        .setImage(`attachment://${text[kk]}`)
        message.channel.send({ embeds: [embed], files: [file]})
    }
};