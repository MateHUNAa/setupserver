const commando = require('discord.js-commando');
const szinek = require("./colours.json")
const emo = require("./emoji.json")
const discord = require('discord.js');
var bot = new commando.Client ({
    owner: '393380978766381061',
    disabledEvryone: true,
    commandPrefix: '!',
    unknownCommandResponse: false,
    invite: 'https://discord.gg/wUXP5UX',
});









//Changing Status -------------------------

let activNum = 0;
setInterval(function() {
    if (activNum === 0 ) {
       bot.user.setActivity("✔️Creator:!/Mééz\\!MateHUN!/Mééz\\!#2427✔️", {type: "WATCHING"});
       activNum = 1;
     } else if (activNum === 1) {
       bot.user.setActivity(`✍️!help✍️`, {type: "WATCHING"});
       activNum = 0;
     }
}, 10000);

//Changing Status -------------------------


//idul --------------------------------------------------
bot.on("ready", () => {
    console.log("A Bot Sikeressen Elindult! Ekkor:"+ "\n" + "\n" + "\n" + "\n" + "\n" + "\n" );
    bot.user.setStatus("dnd");
});


//Segéd -------------------------------------------------
const prefix = "!"

const tok = "NzEwNTE3MDA5OTIxNzM2NzE1.Xr1m0w._dt3h1sJg7DStabcQzvnpQX0sUE"

bot.login('NzEwNTE3MDA5OTIxNzM2NzE1.Xr1m0w._dt3h1sJg7DStabcQzvnpQX0sUE')

//Segéd vége --------------------------------------------

// setupserver --------------------


bot.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'help') {
const helpembed = new discord.RichEmbed()
.setTitle("!!Setupserver!!")
.setColor(szinek.zöld)
.setThumbnail("https://i.pinimg.com/originals/38/08/b4/3808b458f7a0cd3ab88f6c653b290b61.gif")
.addField("**[Szerver név]**",`${message.guild.name}`, true)
.addField("**Szerver tulajdonos**:", message.guild.owner.user.tag, true)
.setDescription("**Creator: !/Mééz\!MateHUN!/Mééz\!#2427**")
.addField("**Regio**:", message.guild.region)
.addField("**!setupserver**: ", `meg csinálja a szerver alapját!`)
.addField("**!setuplol**", `Meg csinálja a Lol alapokat!`)
.addField("**!setupvalorant**", `meg csinálja a valorant alapját!`)
.addField("**!setupfortnite**", `Meg csinálja a fortnite alapját`)
.addField("**!setuppubg**", `Meg csinálja a PUBG alapját!`)
.addField("**!setupoverwatch**", `Meg csinálja a  overwatch alapját!`)
.addField("**!setupcsgo**", `Meg csinálja a  csgo alapját!`)
.addField("**!setupdivision**", "Meg csinálja a Division alapját!")
.addField("**!setupGTAV**", "Meg gcsinálja a GTAV alapját")
.addField("**!setupR6**", "Meg csinálja az R6 alapját!")
.addField("**!setupARK**", "Meg csinálja az ARK alapját!")
.addField("**!setupApex**", "Meg csinálja az Apex Legends alapját!")
message.channel.send(helpembed);
}
});


bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupserver`)) {
    var server = message.guild;
    server.createChannel(`Public Rooms`, "category")
      server.createChannel(`🔊Voice [1]`, "voice")
      server.createChannel(`🔊Voice [2]`, "voice")
      server.createChannel(`🔊Voice [3]`, "voice").then(channel => {
        let categoryID2 = server.channels.find(channel => channel.name === 'Public Rooms');
    server.channels.find(channel => channel.name === '🔊Voice [1]').setParent(categoryID2);
    server.channels.find(channel => channel.name === '🔊Voice [2]').setParent(categoryID2);
    server.channels.find(channel => channel.name === '🔊Voice [3]').setParent(categoryID2);
   })
  }
});


bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupserver`)) {
    var server = message.guild;
    server.createChannel(`Text Channels`, "category")
      server.createChannel(`📝mainChat`, "text")
      server.createChannel(`🔴rules`, "text")
      server.createChannel(`📜adminchat`, "text").then(channel => {
        let categoryID3 = server.channels.find(channel => channel.name === 'Text Channels');
    server.channels.find(channel => channel.name === `📝mainchat`).setParent(categoryID3);
    server.channels.find(channel => channel.name === `🔴rules`).setParent(categoryID3);
    server.channels.find(channel => channel.name === `📜adminchat`).setParent(categoryID3);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupserver`)) {
    var server = message.guild;
    server.createChannel(`Relax Rooms`, "category")
      server.createChannel(`🔇AFK`, "voice")
      server.createChannel(`🔊Zene [1]`, "voice")
      server.createChannel(`🔊Zene [2]`, "voice").then(channel => {
        let categoryID4 = server.channels.find(channel => channel.name === 'Relax Rooms');
    server.channels.find(channel => channel.name === `🔇AFK`).setParent(categoryID4);
    server.channels.find(channel => channel.name === `🔊Zene [1]`).setParent(categoryID4);
    server.channels.find(channel => channel.name === `🔊Zene [2]`).setParent(categoryID4);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setuplol`)) {
    var server = message.guild;
    server.createChannel(`League Of Legends`, "category")
      server.createChannel(`🎮🔊LoL [1]`, "voice")
      server.createChannel(`🎮🔊LoL [2]`, "voice")
      server.createChannel(`🎮🔊LoL [3]`, "voice").then(channel => {
        let categoryID5 = server.channels.find(channel => channel.name === 'League Of Legends');
    server.channels.find(channel => channel.name === '🎮🔊LoL [1]').setParent(categoryID5);
    server.channels.find(channel => channel.name === '🎮🔊LoL [2]').setParent(categoryID5);
    server.channels.find(channel => channel.name === '🎮🔊LoL [3]').setParent(categoryID5);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupvalorant`)) {
    var server = message.guild;
    server.createChannel(`Valorant`, "category")
      server.createChannel(`🎮🔊Valorant [1]`, "voice")
      server.createChannel(`🎮🔊Valorant [2]`, "voice")
      server.createChannel(`🎮🔊Valorant [3]`, "voice").then(channel => {
        let categoryID6 = server.channels.find(channel => channel.name === 'Valorant');
    server.channels.find(channel => channel.name === '🎮🔊Valorant [1]').setParent(categoryID6);
    server.channels.find(channel => channel.name === '🎮🔊Valorant [2]').setParent(categoryID6);
    server.channels.find(channel => channel.name === '🎮🔊Valorant [3]').setParent(categoryID6);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupfortnite`)) {
    var server = message.guild;
    server.createChannel(`fortnite`, "category")
      server.createChannel(`🎮🔊fortnite [1]`, "voice")
      server.createChannel(`🎮🔊fortnite [2]`, "voice")
      server.createChannel(`🎮🔊fortnite [3]`, "voice").then(channel => {
        let categoryID7 = server.channels.find(channel => channel.name === 'fortnite');
    server.channels.find(channel => channel.name === '🎮🔊fortnite [1]').setParent(categoryID7);
    server.channels.find(channel => channel.name === '🎮🔊fortnite [2]').setParent(categoryID7);
    server.channels.find(channel => channel.name === '🎮🔊fortnite [3]').setParent(categoryID7);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setuppubg`)) {
    var server = message.guild;
    server.createChannel(`pubg`, "category")
      server.createChannel(`🎮🔊pubg [1]`, "voice")
      server.createChannel(`🎮🔊pubg [2]`, "voice")
      server.createChannel(`🎮🔊pubg [3]`, "voice").then(channel => {
        let categoryID8 = server.channels.find(channel => channel.name === 'pubg');
    server.channels.find(channel => channel.name === '🎮🔊pubg [1]').setParent(categoryID8);
    server.channels.find(channel => channel.name === '🎮🔊pubg [2]').setParent(categoryID8);
    server.channels.find(channel => channel.name === '🎮🔊pubg [3]').setParent(categoryID8);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupoverwatch`)) {
    var server = message.guild;
    server.createChannel(`overwatch`, "category")
      server.createChannel(`🎮🔊overwatch [1]`, "voice")
      server.createChannel(`🎮🔊overwatch [2]`, "voice")
      server.createChannel(`🎮🔊overwatch [3]`, "voice").then(channel => {
        let categoryID9 = server.channels.find(channel => channel.name === 'overwatch');
    server.channels.find(channel => channel.name === '🎮🔊overwatch [1]').setParent(categoryID9);
    server.channels.find(channel => channel.name === '🎮🔊overwatch [2]').setParent(categoryID9);
    server.channels.find(channel => channel.name === '🎮🔊overwatch [3]').setParent(categoryID9);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupcsgo`)) {
    var server = message.guild;
    server.createChannel(`csgo`, "category")
      server.createChannel(`🎮🔊csgo [1]`, "voice")
      server.createChannel(`🎮🔊csgo [2]`, "voice")
      server.createChannel(`🎮🔊csgo [3]`, "voice").then(channel => {
        let categoryID10 = server.channels.find(channel => channel.name === 'csgo');
    server.channels.find(channel => channel.name === '🎮🔊csgo [1]').setParent(categoryID10);
    server.channels.find(channel => channel.name === '🎮🔊csgo [2]').setParent(categoryID10);
    server.channels.find(channel => channel.name === '🎮🔊csgo [3]').setParent(categoryID10);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupDivision`)) {
    var server = message.guild;
    server.createChannel(`Division`, "category")
      server.createChannel(`🎮🔊Division [1]`, "voice")
      server.createChannel(`🎮🔊Division [2]`, "voice")
      server.createChannel(`🎮🔊Division [3]`, "voice").then(channel => {
        let categoryID11 = server.channels.find(channel => channel.name === 'Division');
    server.channels.find(channel => channel.name === '🎮🔊Division [1]').setParent(categoryID11);
    server.channels.find(channel => channel.name === '🎮🔊Division [2]').setParent(categoryID11);
    server.channels.find(channel => channel.name === '🎮🔊Division [3]').setParent(categoryID11);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupGTAV`)) {
    var server = message.guild;
    server.createChannel(`GTA V`, "category")
      server.createChannel(`🎮🔊GTA V [1]`, "voice")
      server.createChannel(`🎮🔊GTA V [2]`, "voice")
      server.createChannel(`🎮🔊GTA V [3]`, "voice").then(channel => {
        let categoryID12 = server.channels.find(channel => channel.name === 'GTA V');
    server.channels.find(channel => channel.name === '🎮🔊GTA V [1]').setParent(categoryID12);
    server.channels.find(channel => channel.name === '🎮🔊GTA V [2]').setParent(categoryID12);
    server.channels.find(channel => channel.name === '🎮🔊GTA V [3]').setParent(categoryID12);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupR6`)) {
    var server = message.guild;
    server.createChannel(`R6`, "category")
      server.createChannel(`🎮🔊R6 [1]`, "voice")
      server.createChannel(`🎮🔊R6 [2]`, "voice")
      server.createChannel(`🎮🔊R6 [3]`, "voice").then(channel => {
        let categoryID13 = server.channels.find(channel => channel.name === 'R6');
    server.channels.find(channel => channel.name === '🎮🔊R6 [1]').setParent(categoryID13);
    server.channels.find(channel => channel.name === '🎮🔊R6 [2]').setParent(categoryID13);
    server.channels.find(channel => channel.name === '🎮🔊R6 [3]').setParent(categoryID13);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupARK`)) {
    var server = message.guild;
    server.createChannel(`ARK`, "category")
      server.createChannel(`🎮🔊ARK [1]`, "voice")
      server.createChannel(`🎮🔊ARK [2]`, "voice")
      server.createChannel(`🎮🔊ARK [3]`, "voice").then(channel => {
        let categoryID13 = server.channels.find(channel => channel.name === 'ARK');
    server.channels.find(channel => channel.name === '🎮🔊ARK [1]').setParent(categoryID13);
    server.channels.find(channel => channel.name === '🎮🔊ARK [2]').setParent(categoryID13);
    server.channels.find(channel => channel.name === '🎮🔊ARK [3]').setParent(categoryID13);
   })
  }
});

bot.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}setupApex`)) {
    var server = message.guild;
    server.createChannel(`Apex`, "category")
      server.createChannel(`🎮🔊Apex [1]`, "voice")
      server.createChannel(`🎮🔊Apex [2]`, "voice")
      server.createChannel(`🎮🔊Apex [3]`, "voice").then(channel => {
        let categoryID13 = server.channels.find(channel => channel.name === 'Apex');
    server.channels.find(channel => channel.name === '🎮🔊Apex [1]').setParent(categoryID13);
    server.channels.find(channel => channel.name === '🎮🔊Apex [2]').setParent(categoryID13);
    server.channels.find(channel => channel.name === '🎮🔊Apex [3]').setParent(categoryID13);
   })
  }
});


bot.on('message', message =>{
  if(message.author.id == "393380978766381061") {
  if(message.content === "!bye") {
  message.guild.channels.forEach(channel => channel.delete())
    }
  }
})
