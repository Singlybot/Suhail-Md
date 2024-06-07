const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07939475412";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_01_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDMkpuUkg1cy9nN0JUd3Z4Z005RVRUOHhqczNXYUhDTzB3bUtFWmdDY093PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzkzOTQ3NTQxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEFEMEQzODI4MzM3OUY5NDU1OEVCRjBGNzA2MzA2NzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3Nzc2MTEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3OTM5NDc1NDEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRTMwOUZBOUVBOEJDMEYzMTI2RUI1REFGQUE1OUNFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc3NzYxMTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0taVGFJZFZTTkN4YUFzMnQ4MDk1QVwiLFxuICBcInBob25lSWRcIjogXCJkNTQ2NGM5MS0yYmEzLTRjYWUtYmRlMy0wOTUyNTBlODMwMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyNDYsXG4gICAgICAxNjksXG4gICAgICAyNDEsXG4gICAgICAxNDEsXG4gICAgICA4LFxuICAgICAgMTU5LFxuICAgICAgMTUzLFxuICAgICAgNTUsXG4gICAgICAyMDAsXG4gICAgICAyNSxcbiAgICAgIDk1LFxuICAgICAgMTU5LFxuICAgICAgNzUsXG4gICAgICAyMTgsXG4gICAgICAxMjIsXG4gICAgICAyNSxcbiAgICAgIDE3OSxcbiAgICAgIDIzMyxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICA1NSxcbiAgICAgIDIsXG4gICAgICAxNzMsXG4gICAgICAxMjAsXG4gICAgICAyNSxcbiAgICAgIDE5NSxcbiAgICAgIDEyLFxuICAgICAgMjAsXG4gICAgICAyMzAsXG4gICAgICA1OCxcbiAgICAgIDI1MyxcbiAgICAgIDIzOCxcbiAgICAgIDUzLFxuICAgICAgNjQsXG4gICAgICAxMjksXG4gICAgICAxNDYsXG4gICAgICA1MixcbiAgICAgIDY5LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVXUFEyQkxHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc5Mzk0NzU0MTI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ1NjQyNTc1OTAwNzgzOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVsaXhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNON296TmtDRU9mZGpMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImh0OWNjZmNiU1NxTjl1SkcvSGFiNDVjb3dDeWVjOXFFczN3TS9FSmRTSGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLzZ6dEdyM3RTK1VlMXNSVklGOGY3dmdmK2R0OURxdk1nbElidmlnYzNhU1hqQmJ1RXFvNHBGL0ZtUFlUOTBnYWlDOWlTdkpvTkRqMEtUOWs2Zm5NQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNTV5NDl2Z2NPMmRWUkZmNGc1a0FCc0doTlJ6aFdjenNpTDFGVVg3a084K0UwOVVvUWxuQnMxbGZZNmhmK1R1MndBTmdCdmVSTTZydGpwV3l2ZnBMZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3OTM5NDc1NDEyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3Nzc2MTA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0p3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDSncuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJRzMrcEthaGg5dm5qU05oR1JubFdNNDdUK3QySHUwdDJjam5DZG1iWkN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyNDc3NjAzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3Nzc2MTA5MzI4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
