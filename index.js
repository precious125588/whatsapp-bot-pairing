// WhatsApp Device Linking Popup QR Code Implementation
// Automatic DM with session info and random songs on first message
// Full Baileys Integration with Express Server and Beautiful Homepage

const express = require('express');
const { create, Client } = require('@open-wa/wa-automate');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the WhatsApp Bot</h1>');
});

create().then(client => start(client));

function start(client) {
    client.onMessage(async message => {
        if (message.body === '!start') {
            // Send a welcome message with session info
            await client.sendText(message.from, 'Welcome to the bot! Your session info is: ...');
            // Send a random song
            const randomSong = getRandomSong();
            await client.sendText(message.from, `Here is a random song for you: ${randomSong}`);
        }
    });
}

function getRandomSong() {
    const songs = ['Song 1', 'Song 2', 'Song 3']; // Add your song list
    return songs[Math.floor(Math.random() * songs.length)];
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});