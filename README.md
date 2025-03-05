# Crypt_SCA
A real-time chat application that ensures secure communication using AES encryption. Built with Node.js, Express, and Socket.io, this app encrypts messages before sending and decrypts them upon receipt, providing privacy and security.

🚀 Features
✅ Real-time messaging using Socket.io
✅ AES encryption & decryption for secure communication
✅ User-friendly interface with a simple chat layout
✅ Encrypted message storage & display
✅ Node.js + Express backend for handling connections

🛠️ Installation
Clone the repository:
sh
Copy
Edit
git clone https://github.com/yourusername/repository-name.git
Navigate into the project directory:
sh
Copy
Edit
cd repository-name
Install dependencies:
sh
Copy
Edit
npm install
Start the server:
sh
Copy
Edit
node index.js
Open http://localhost:5000 in your browser.
🔧 Technologies Used
Frontend: HTML, CSS, TailwindCSS, JavaScript
Backend: Node.js, Express, Socket.io
Encryption: CryptoJS (AES Encryption)
💡 How It Works
User enters a name and message
Message gets encrypted before being sent
Backend receives & broadcasts the encrypted message
Receiver decrypts and views the original message
