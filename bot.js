const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528319778213986304")
setInterval(function() {
channel.send(`اريد فلوس اني فقير`);
}, 001)
})

client.login('NTI3NjU3NDY2NTc4NzMxMDA4.DwgWvw.T9cnCrO1gWf9A3q-WJZtOI1OPKI');
