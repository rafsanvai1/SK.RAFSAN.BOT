module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`SORRY BOSS 𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 I COULDN'T ADDING THIS USER \n ${name} BECAUSE OF HE/SHE BLOCK ME OR HE/SHE HAVE NO MASSENGER IN HIS/HER PHONE😞 \n\n ──────·····✦·····──── \n 🅰🅸 🅰🆂🅸🆂🆃🅰🅽🆃| 𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 `, event.threadID)
   } else api.sendMessage(`DEAR, ${name} YOU CAN'T LEAVE THIS GRUOP \n ARE YOU NEED TO LEAVE THIS GRUOP YOU NEED ADMIN PERMISSION (𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃)! \nYOU LEAVE WITHOUT ADMIN PERMISSION THATS WHY I AM AGAIN ADD YOU \n\n ── ·······✦·······──── \n 🅰🅸 🅰🆂🅸🆂🆃🅰🅽🆃| 𝐙𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 `, event.threadID);
  })
 }
}
