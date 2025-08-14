module.exports = {
 config: {
   name: "autodl",
   version: "0.0.2",
   hasPermssion: 0,
   credits: "Ferdous Wahid",
   description: "Auto video downloader by Ferdous Wahid",
   commandCategory: "user",
   usages: "",
   cooldowns: 5,
 },

 run: async function ({}) {},

 handleEvent: async function ({ api, event }) {
   const axios = require("axios");
   const fs = require("fs-extra");
   const content = event.body || '';
   const body = content.toLowerCase();

   // Keep this as-is, it's the required module name and must not be changed
   const { alldown } = require("shaon-videos-downloader");

   if (body.startsWith("https://")) {
     try {
       api.setMessageReaction("⚠️", event.messageID, () => {}, true);

       const data = await alldown(content);
       if (!data || !data.url) {
         return api.sendMessage("❌ Couldn't extract video URL.", event.threadID);
       }

       const videoURL = data.url;

       api.setMessageReaction("☢️", event.messageID, () => {}, true);

       const video = (await axios.get(videoURL, {
         responseType: "arraybuffer",
       })).data;

       const filePath = __dirname + "/cache/auto.mp4";
       fs.ensureDirSync(__dirname + "/cache");
       fs.writeFileSync(filePath, Buffer.from(video));

       return api.sendMessage({
         body: `🔥🚀 𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃🔥💻 
📥⚡ 🅰🅸 🅰🆂🅸🆂🆃🅰🅽🆃 Video downloaded successfully! ⚡📂
🎬 Enjoy the video! 🎀`,
         attachment: fs.createReadStream(filePath)
       }, event.threadID, event.messageID);

     } catch (err) {
       console.log("AutoDL Error:", err);
       return api.sendMessage("❌ Error during download. Check console.", event.threadID);
     }
   }
 }
   }
