const axios = require('axios');
const { cmd } = require('../command');

// Repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Fetch repository data from GitHub API
        const repoResponse = await axios.get('https://api.github.com/repos/caseyweb/CASEYRHODES-XMD');
        const { stargazers_count, forks_count } = repoResponse.data;
        const userCount = forks_count * 5; // Estimate user count based on forks

        // Construct the message
        const message = `
*Hello there, caseyrhodes xmd User! 👋*

💻 *𝑪𝑨𝑺𝑬𝒀𝑹𝑯𝑶𝑫𝑬𝑺-𝑿𝑴𝑫 Repository Info*:
⭐ *Stars*: ${stargazers_count}
🍴 *Forks*: ${forks_count}
👥 *Users*: ${userCount}
🔗 *Repository*: https://github.com/caseyweb/CASEYRHODES-XMD
> ✨ 𝑪𝑨𝑺𝑬𝒀𝑹𝑯𝑶𝑫𝑬𝑺-𝑿𝑴𝑫 WhatsApp Bot – Simple. Smart. Feature-packed. 🚀
Effortlessly elevate your WhatsApp experience with our cutting-edge bot technology! 🎊
*💡 Tip: Don’t forget to fork the repo and leave a star to show your support! 🌟*

🙌 Thank you for choosing ℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊-𝕏𝕄𝔻 – your ultimate bot companion! 🎉
        `;

        // Send the repository info as a text message
        await conn.sendMessage(from, { text: message }, { quoted: mek });

        // Send a related image with additional newsletter forwarding context
        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: message,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '12036330267721743@newsletter',
                        newsletterName: 'ℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊-𝕏𝕄𝔻 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio response (PTT voice note)
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/hpwsi2.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error('Error fetching repository data:', error);
        reply(`❌ *Error fetching repository data:* ${error.message}`);
    }
});
