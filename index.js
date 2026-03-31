// Import necessary libraries
const { Client } = require('whatsapp-web.js');
const fs = require('fs');
const fetch = require('node-fetch');

// Session management with prezzy_ prefix
let sessionData = {};

const sessionFile = 'session.json';

// Load session data if it exists
if (fs.existsSync(sessionFile)) {
    sessionData = require(`./${sessionFile}`);
}

const client = new Client({
    session: sessionData
});

client.on('qr', (qr) => {
    // Generate and display QR code
    console.log('QR Code received', qr);
});

client.on('authenticated', (session) => {
    console.log('Authenticated successfully!');
    sessionData = session; // Store session data
    fs.writeFileSync(sessionFile, JSON.stringify(sessionData));
});

client.on('auth_failure', () => {
    console.error('Authentication failure, please restart the application.');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// Handle visitor interaction for random song playback
client.on('message', async message => {
    if (message.body.toLowerCase() === 'play song') {
        const songUrl = await getRandomSong();
        client.sendMessage(message.from, songUrl);
    }
});

async function getRandomSong() {
    // Replace this with actual logic to get a random song URL
    const songs = ['Song URL 1', 'Song URL 2', 'Song URL 3'];
    return songs[Math.floor(Math.random() * songs.length)];
}

client.initialize();
