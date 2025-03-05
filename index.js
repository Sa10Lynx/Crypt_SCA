

const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;


const CryptoJS = require("crypto-js");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/encrypted-messages', (req, res) => {
    res.sendFile(__dirname + '/encrypted_messages.html');
});

io.on('connection', (socket) => {
    socket.on('send name', (encryptedUsername) => {
        const username = decrypt(encryptedUsername);
        console.log('Encrypted Username:', encryptedUsername);
        console.log('Decrypted Username:', username);
        io.emit('send name', encrypt(username));
    });

    socket.on('send message', (encryptedChat) => {
        const chat = decrypt(encryptedChat);
        console.log('Encrypted Chat:', encryptedChat);
        console.log('Decrypted Chat:', chat);
        io.emit('send message', encrypt(chat));
    });
});

server.listen(port, () => {
    console.log(`Server is listening at the port: ${port}`);
});

// Encrypt function using AES
function encrypt(message) {

    const messageStr = JSON.stringify(message);
    // Encrypt message with AES using a secret key
    const encryptedMessage = CryptoJS.AES.encrypt(messageStr, 'secretKey').toString();
    return encryptedMessage;
}

// Decrypt function using AES
function decrypt(encryptedMessage) {
    // Decrypt message with AES using the same secret key
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, 'secretKey');

    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    // Parse decrypted string to JSON
    return JSON.parse(decryptedMessage);
}
