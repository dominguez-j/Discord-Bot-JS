const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require("@distube/yt-dlp")
const { EmbedBuilder } = require('discord.js');
module.exports = (client) => {

    const status = queue => `Volumen: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
    
    client.config = require("../config.json")

    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: true,
        leaveOnStop: true,
        emitAddSongWhenCreatingQueue: false,
        emitAddListWhenCreatingQueue: false,
        plugins: [
            new SpotifyPlugin({
                emitEventsAfterFetching: true,
            }),
            new SoundCloudPlugin(),
            new YtDlpPlugin()
        ],
    });

    client.distube

    .on("playSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new EmbedBuilder()
                .setColor('Random')
                .setThumbnail(`${song.thumbnail}`)
                .setDescription(`▶️ | Reproduciendo \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)  
                .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    })

    .on("addSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new EmbedBuilder()
                .setColor("Random")
                .setThumbnail(`${song.thumbnail}`)
                .setDescription(`☑️ | Añadida ${song.name} - ${song.formattedDuration}`) 
                .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    })

    .on("addList", (queue, playlist) =>{
        queue.textChannel.send({
            embeds: [new EmbedBuilder()
                .setColor("Random")
                .setThumbnail(`${song.thumbnail}`)
                .setDescription(`☑️ | Añadida \`${playlist.title}\` playlist (${playlist.total_items} songs) a la lista\n${status(queue)}`)  
                .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })            
    })

    .on("error", (channel, e) => {
        const embed = new EmbedBuilder()
            .setColor('Random')
            .setDescription(`❌ | Creo que paso algo pa: ${e.toString().slice(0, 1974)}`)     
        channel.send(embed)
        console.error(e)   
    })
    
    .on('searchNoResult', (message, query) =>
        message.channel.send(`❌ | No encontré nada pa \`${query}\`!`)
    );
};