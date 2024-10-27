const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://chat.whatsapp.com/JlOJwwJVDnzJIaSIBoggV6" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "94703760634" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94740395948";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94740395948";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_56_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNixcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFkRjFNL0tHa1VNYzQ1YjgyVHVsSkpmczFPbGVHWnpiZVhGd1k0K2hETUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDM3NjA2MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM5ODZDQUY4NTVEMUU1NzRDNjY0MDg3MzVGQUE5QzZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDAwNDk3N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAzNzYwNjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNEQxQTI5M0Q2Nzc3NUFFQzE2QzFCMjc1RTNEQzQ2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAwMDQ5NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMzc2MDYzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0YyRTlBRjkzMDI2ODEzQThFNzNGQjc3QjIyMjhEQ0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMDA0OTgxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9pSEcyQ2xxUnlLam9Sa0RBXzVFcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWIwNjBjY2UtYmQxMi00M2IzLTlkOWYtYjA0YzgwN2YxOTgxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDk3LFxuICAgICAgMjksXG4gICAgICAyMTksXG4gICAgICAxMjQsXG4gICAgICAxNjUsXG4gICAgICAxMDcsXG4gICAgICAyOCxcbiAgICAgIDE3OSxcbiAgICAgIDExMCxcbiAgICAgIDIxOCxcbiAgICAgIDE0MCxcbiAgICAgIDIyMyxcbiAgICAgIDg2LFxuICAgICAgNzMsXG4gICAgICA1MixcbiAgICAgIDEwNixcbiAgICAgIDQ1LFxuICAgICAgMjM4LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTcyLFxuICAgICAgNDMsXG4gICAgICAxMDUsXG4gICAgICA0MixcbiAgICAgIDUsXG4gICAgICAyNDAsXG4gICAgICAxODgsXG4gICAgICA2NCxcbiAgICAgIDY2LFxuICAgICAgMjcsXG4gICAgICAxNTAsXG4gICAgICA0MyxcbiAgICAgIDExMCxcbiAgICAgIDE3NCxcbiAgICAgIDE1MSxcbiAgICAgIDI1MyxcbiAgICAgIDQwLFxuICAgICAgMTA1LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCWTYzUUY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzc2MDYzNDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhlZWVcIixcbiAgICBcImxpZFwiOiBcIjEyMTQ0OTM2MDY3NDg2NToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKS1E5dUFGRU91UDk3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIks1OWV0d1phZ2NUam9XQmlBbEROVWhnZlBmS3cvc3JkWmxPTWNvWGFQelE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVpnZG1jeWJmUjk4aDZuUG4xWFZ6Y2QvdXUraE9IdE5IdU9QbmQ2c0Rhb2lPMDgydm1TbTFuVGZPdm5SZDduSnlQWlJiU21IeFRDWjVyWTVYRDhGQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMlcvWkU1UldCQ1k0cGdQNUtlcWZLdU43czJXOWxSVkJKZ3pmOWdRVDlKNFUxSVU4R21MdjluSnVWNVgwR0wxMTZsbTdFU1lWaXJkTDBuR2plRGViRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDM3NjA2MzQ6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMDA0OTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3o4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPejguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaY1I3VFQrMGtmZG9FQkZUaXZwMHZNL2o1cU9jWDFhUnp2bXdXVnZBaENzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDU0MzkyNTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDAwNDk3Nzg5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
