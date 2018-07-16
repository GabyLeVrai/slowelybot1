const Discord = require("discord.js")
const bot  = new Discord.Client();
const client = new Discord.Client();
const channel = new Discord.Channel();

bot.on('message', function (message){;
    if(message.content === '.help') {;
        message.react('❤')
  //      .then(console.log)
        .catch(console.error);
    }
});

bot.on('message', message => {
    if (message.content === '.avatar') {
      message.reply(message.author.avatarURL);
    }
  });

  bot.on("guildMemberAdd", function(member) {
      member.addRole(member.guild.roles.find("name", "Abonnés"));
  })

bot.on('message', message => {
    if(message.content === '.info') {
        var embed = new Discord.RichEmbed()
        .setDescription('Infomation du Discord')
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoins le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
        .setColor("#FF00FF")
    message.channel.sendEmbed(embed)    
    }

    if (message.content.startsWith(".sondage")) {
        if(message.author.id == "356185137379016706", "175656408459640832", "273848826270580737", "176740082340986880", "262380201042903040", "335150423776165908", ""){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("#FF00FF")
                .setTimestamp()
            message.guild.channels.find("name", "👌sondage👌").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            })   .catch(function() {
            })
            }else{
                return message.reply("Tu n'as pas la permission!")
        }
    }

})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', '🆕bienvenue🆕');
    if (!channel) return;
    channel.send(`Bienvenue ${member}, et bienvenue sur le Discord de **Slowely Games** :tada::hugging: !`);
  });

bot.on('guildMemberAdd', function (member) {;
    member.createDM().then(function (channel) {;
        return channel.send(`Hey, ${member} bienvenue sur le Discord de **Slowely**! :tada::hugging: -->** .help** `);
    }).catch(console.error)
})

bot.on('message', message => {

    if(message.content === '.blague'){
    random();

    if (randnum == 0){
    message.channel.sendMessage("L'amour c'est ça : \n Tu m'aimes, Je t\'aime ! \n Tu pleures, Je pleure ! \n Tu souris, Je souris ! \n Tu tombes, Je rigole... !")
    console.log(randnum);
    }

    if (randnum == 1){
        message.channel.sendMessage("Quel est le point commun entre un professeur et un thermomètre ? \n On tremble quand ils marquent zéro !")
        console.log(randnum);
        }
    
    if (randnum == 2){
    message.channel.sendMessage("Une camionnette, c'est un petit camion. \n Une fourchette, c'est une petite fourche. \n Une barrette, c'est une petite barre. \n Alors qu'est qu'une salopette?")
    console.log(randnum);
            }

     if (randnum == 3){
     message.channel.sendMessage("Pourquoi Napoléon n'a pas acheté une maison ? \n Parce qu'il avait déjà un bon appart (bonparte)")
     console.log(randnum);
                        }
    
    if (randnum == 4){
    message.channel.sendMessage("Qu'est-ce qu'une manifestation d'aveugles ? \n Un festival de Cannes")
    console.log(randnum);
                        }                                  

    if (randnum == 5){
    message.channel.sendMessage("Savez-vous quel est le sport le plus fruité au monde ? \n La boxe parce que tu reçois une pêche en pleine poire, tu tombes dans les pommes et tu ne ramènes plus ta fraise")
    console.log(randnum);
}
    }
})                    

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

bot.on('message', message => {
    if(message.content === '.staff') {
        message.reply('Un membre du @STAFF te contactera dans quelque instants.')
        console.log(`${message.author.username} contact le Staff!`);
    }
})

bot.on('ready', () => {
    console.log('')
    console.log('Connecté avec succès!');
    console.log(`${bot.user.username} est connecté sur ${bot.guilds.size} serveurs!`);
    console.log('')
   // console.log(`Fichiers: ${f} chargé!`)
   bot.user.setActivity('.help | SlowelyBot', {type: "Playing"}); //PLAYING STREAMING LISTENING WATCHING
  });

  bot.on('message', message => {
    if(message.content === '.help'){
    let serverembed = new Discord.RichEmbed()
    .setDescription("Commandes De Base")
    .setColor("#15f153")
    .addField(".help", "Envoie la page d'aide")
    message.channel.send(serverembed);
    console.log(`${message.author.username} demande la page d'aide!`);
    }

    if(message.content === '.help'){
        let serverembed = new Discord.RichEmbed()
        .setDescription("Autres Commandes")
        .setColor("#15f153")
        .addField(".blague", "Envoie une blague RANDOOOM !")
        message.channel.send(serverembed);
        }    
    if(message.content === '.help'){
        let serverembed = new Discord.RichEmbed()
        .setDescription("Commandes de Contact")
        .setColor("#15f153")
        .addField(".staff", "Envoie une Notif au Staff (Spam = Ban)")
        message.channel.send(serverembed);
        }    
})

client.on('message', message => {
    if (message.content === '.avatar') {
      message.reply(message.author.avatarURL);
    }
  });
  

bot.login('NDY4MTY1MzA1MTQzNzg3NTM0.Di1Mkg.6nmkOAJXeAsXpWwAZ4OIRA3Tyag')
