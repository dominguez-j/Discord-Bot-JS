module.exports = (client) => {
    console.log(`Conectado como ${client.user.username}!`);
    client.user.setPresence({ activities: [{ name: '.help | Bot de Chon' }] });
}

