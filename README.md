# WhatsApp Bot Pairing

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/precious125588/whatsapp-bot-pairing.git
   cd whatsapp-bot-pairing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on the provided `.env.example`.
4. Add your credentials and configuration in the `.env` file.

## Pairing Options
- **Option 1**: Pair using QR Code
  - Scan the QR code with your WhatsApp mobile application to connect.

- **Option 2**: Pair with Phone Number
  - Enter the phone number you wish to pair with in the configuration settings.

## Features
- **Automated responses**: Respond to common queries automatically.
- **Multi-language support**: Communicate in various languages.
- **Interactive menus**: Offer menu-driven options for users.

## Deployment Guides
1. Deploy on local machine:
   - Ensure Node.js is installed.
   - Run the bot using:
     ```bash
     node index.js
     ```

2. Deploy on cloud platforms (e.g., Heroku, AWS):
   - Follow the respective platform's documentation for deploying a Node.js application.

3. Ensure to set environment variables on the cloud platform as specified in the `.env` file.

## License
This project is licensed under the MIT License.