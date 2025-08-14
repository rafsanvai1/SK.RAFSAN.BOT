module.exports.config = {
  name: "trollhack",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ferdous Wahid",
  description: "Fake hack the mentioned user",
  commandCategory: "fun",
  usages: "@tag",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("Tag someone to hack! 💻", event.threadID);

  const name = event.mentions[mention].replace("@", "");

  const steps = [
    `💻 Initiating hack on ${name}...`,
    "📡 Connecting to Facebook servers...",
    "🔓 Bypassing 2FA...",
    "📂 Accessing private messages...",
    "📁 Downloading embarrassing photos...",
    "💳 Stealing credit card info... (wow, broke)",
    "📤 Uploading data to dark web...",
    "✅ Hack complete! NOW MY BOSS 𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 CAN ALSO CONTROL YOUR ACCOUNT 😈",
    "🧠 ARE YOU REALLY NEED YOUR ACCOUNT BACK PLEASE CONTACT MY BOSS 𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃"
  ];

  for (let i = 0; i < steps.length; i++) {
    setTimeout(() => {
      api.sendMessage(steps[i], event.threadID);
    }, i * 2000);
  }
};
