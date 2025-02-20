
/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    🇰🇪ＰＲＯＪＥＣＴ ＮＡＭＥ:
    CASEYRHODES ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    🔥 ＤＥＶＥＬＯＰＥＲ
      CASEYRHODES 
     
    🔥 ＭＹ ＴＥＡＭ
     CASEYRHODES XTECH 
     
    🔥 ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/caseyweb/CASEYRHODES-XMD

© 2025 GOD IS GOOD ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/















const { cmd } = require("../command");
const yts = require("yt-search");
const axios = require("axios");

// temporary songs downloader

cmd({
  pattern: "play",
  react: '🎵',
  desc: "Download audio from YouTube by searching for keywords (using API 2).",
  category: "music",
  use: ".play1 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("```...ᴄᴀsᴇʏʀʜᴏᴅᴇs xᴍᴅ ɪs sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ᴀᴜᴅɪᴏ ᴡᴀɪᴛ🔍```");

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the audio
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the audio file
    await conn.sendMessage(from, {
      audio: { url: download_url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: mek });

    reply(`✅ *${title}* ʜᴀs ʙᴇᴇɴ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇsғᴜʟʟʏ!`);
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

//&&&&&-------&&

cmd({
  pattern: "song4",
  react: '🎵',
  desc: "Download audio from YouTube by searching for keywords (using API 2).",
  category: "music",
  use: ".play1 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("```ᴄᴀsᴇʏʀʜᴏᴅᴇs xᴍᴅ ɪs sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ᴀᴜᴅɪᴏ ᴡᴀɪᴛ...🔍```");

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the audio
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the audio file
    await conn.sendMessage(from, {
      audio: { url: download_url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: mek });

    reply(`✅ *${title}* ʜᴀs ʙᴇᴇɴ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇsғᴜʟʟʏ!`);
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});
