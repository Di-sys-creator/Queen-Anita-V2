//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348103136056";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BnM0Nia0Z2Y040QlAvb3BRaTdlc3Q1U29ZQ3pYc093NzFuaFNkSTVYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2JZVnA2ZWtmMzliai80WHp2MkplT05qemF4K0o1Z0tpaHNQTTJMT1FnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmhWTHg0U1VvejhEWlJwbVpqTW83UWxoWm0yT1QzdUl1MExGWDBjUEdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzanIxRjV3MFNDMnJjTTJNT3hSa2JtaW1TcGNnbHdCdmFuN2E2MGhFbDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1NMDliV1U3WW5wMmJ1bFJiVjZpYU54dkc4bEFBTDc2S2xSblUvWlR2bEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVETDNkUlRkRlhzN01uVVk3WE9jVUFOQjMzVkpmanlaVExlV3FzbDFrRXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tCblRNSnhnakhyVVJIcTRITWlXdlNwd0RTTHFVaFFZelErOTBZbUtWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1lUQlBQVjU5dExFa0ZDUEZFQnRyL25OWnpSTjRiQkZuM3V1T3JzTE1Cbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLL1BMK1NGV1BsTEk2M2dQQnMyaUhjUzdMV0tGc1cranlrUEg3NHc0K3ZsOTY3bUxyaUU5Nmx0MnBHVXB2a2tNTk5qRDVvdm5KbTcwWEE2MHlnNUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJBNWxHZU1RMVBZWnExMnhoR3VZM3QyaUM5V1lRQWM1bExFbGFwcFp5czJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmNFVPcGtnR1IyMml6S3F1RDZFLUx3IiwicGhvbmVJZCI6Ijg0MmEyNDMxLTk1YWQtNGRhMC04OWViLWYzYjRlZjQwODc3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmd1VjYmF3bUVoUVFBVkY0Q1M4ZWplakVNQ009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnV4YnMwY1BBZmpBNTRrb2J1T2tmSUlOVWswPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM1NkRWWVMyIiwibWUiOnsiaWQiOiIyMzQ4MTAzMTM2MDU2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2xhcmtzb24gUHJpbmNlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbnNuZThHRU1DcDU3Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyNlFkL2VIU3NzanByZTJxUVVCWEltSXRhUzkrdlBxTnUxdGoyMkNITlVzPSIsImFjY291bnRTaWduYXR1cmUiOiJwM05vNmpHb3BlMTA5QURsc2dVT3plRHdtaTVXTTNPSG9tZnBRbVJIeGhPdUpHRXhuU2pPbTVXN2hNcFlpeEhsZlkvMEU3MUNaT3cyQWEzajVOYjREZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY1UwTng0UGdsVWJnaXVaeUowM0dFU3BVRVM5dDNKVWlHK0dwTkxmVDZsVVVoMUZtNmJCSkQ4QVdHNDlNYXZTZzBKdytSZnF3N2J3WDlFWFhyUUlJQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTAzMTM2MDU2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHVrSGYzaDByTEk2YTN0cWtGQVZ5SmlMV2t2ZnJ6NmpidGJZOXRnaHpWTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTc0NjEyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFcXMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
