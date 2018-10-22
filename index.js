

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");



const bot = new Discord.Client({disableEveryone: true});

bot.on('ready',() => {
bot.user.setActivity("rocitizens")
})

//---------------------------------------------------------------\\//---------------------------------------------------------------\\

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = botconfig.prefix;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}purge`){
  message.channel.bulkDelete(args[0]);
 return;
}  
           
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\    
 
  
  if(cmd === `${prefix}botstats`){
    let embed = new Discord.RichEmbed()
    .setDescription("***Rocitizens Bot***")
    .addField("Bot ID:", "503987915173396490")
    .addField("Bot Maker:", "<@481171799204429834>")
    
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.channel.send(embed);

   }
}    
 //---------------------------------------------------------------\\//--------------------------------------------------------------- 
  
if(cmd == `${prefix}clientlog`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.channel.send("```lua bot.on.ready = true | bot.heroku.build = true | bot.github = content restricted. | bot.herokupage = https://dashboard.heroku.com/apps/rocitizens```")
    }
}
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
  
 if(cmd == `${prefix}networkhost`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.reply("This bots mainframe is hosted on Heroku, this dashboard should not be leaked to anyone except the bot maker; ScriptedBuilderz.")
    }
} 
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
  
 if(cmd == `${prefix}devlanguage`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.reply("Java, Node.js, HTTPL.")
    }
} 
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
  
 if(cmd == `${prefix}devwarn`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot dev can use this command!"); {       
     let wUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
       if(!wUser) return message.channel.send("Sorry couldnt find user :unamused:");
       let warnreason = args.join(" ").slice(22);
        
        let warnembed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")
        .setColor("#2A363B")
        .addField("Devwarn Reason:", warnreason)
        .setDescription("The bot dev has warned you in: ***Rocitizens***")
            
       message.reply("***User has been warned.***");   
            
       if(message.mentions.users.first()) return message.mentions.users.first().send(warnembed);         
    }
} 
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
 if(cmd == `${prefix}scriptplatform`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot dev can use this command!"); {
      message.reply("Github & Atom.")
    }
} 
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
  if(cmd === `${prefix}help`){
    let embed = new Discord.RichEmbed()
    .setTitle("Help.")
    .setFooter("Official property of Rocitizens.")
    .setDescription("This is a information page, for more info go down.")
    .addField("More Options:", "Dm a Moderator+")
    .addField("More Help Commands:", "-cmds")
    .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")
    .setColor("#2A363B")
    
    message.channel.send(embed)
  }    
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
 if(cmd === `${prefix}status`){

   let announcement = args.join(" ");
 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant set status.");  
  bot.user.setActivity(announcement)
   
  let aembed = new Discord.RichEmbed()
  .setTitle("Bot Status")
  .setDescription("The bot status has been changed, please dont abuse this feature.")
  message.channel.send(aembed);
}  

 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
if(cmd === `${prefix}announce`){
    
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.reply("Sorry you cannot shout things, its only people with manage messages perms. :)"); 
     let announcement = args.join(" ");
     let embed = new Discord.RichEmbed()
     .setDescription(announcement)
     .setTitle("Rocitizens Announcement")
     .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")
     .setColor("#2A363B")
      message.delete();
     message.channel.send(embed)

}   

 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
   
      if(cmd === `${prefix}warn`){
      
     let kchannel = message.guild.channels.find(`name`, "modlogs");         
     let role = message.guild.roles.find("name", "Moderator")     
     let wUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
       if(!wUser) return message.channel.send("Sorry couldnt find user :unamused:");
       let warnreason = args.join(" ").slice(22);
        
        let warnembed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")
        .setColor("#2A363B")
        .addField("Warn Reason:", warnreason)
        .setDescription("You have been warned in ***Rocitizens***")
        
        let wEmbed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png") 
        .setTitle("Warn Used.")
        .setColor("#2A363B")
        .addField("Warned User.", `${wUser} with the ID: ${wUser.id}`)
        .addField("Warned by:", `<@${message.author.username}> with the ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Warn Reason", warnreason);
       
            
        
       if(message.member.roles.has(role.id)) {
       message.reply("***User has been warned.***");
         if(message.mentions.users.first()) return message.mentions.users.first().send(warnembed); 
        kchannel.send(wEmbed); 
      }    else {
         message.reply("Stop trying to warn people that dont need warning please, you dont even have the right perms.")
      }  
        
      }        
                  
     
//---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
   
if(cmd === `${prefix}dm`){

     let mention = args[0];
     const msg = args.slice("1").join(" ");
     
     message.channel.send("User has been DM'ed! Thanks.");
      message.delete().catch(O_o=>{});
      
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant DM people.");
     if(message.mentions.users.first()) return message.mentions.users.first().send(msg);
  }

//---------------------------------------------------------------\\//---------------------------------------------------------------\\
   
 if(cmd === `${prefix}say`){

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
      message.delete().catch(O_o=>{});
}
  
//---------------------------------------------------------------\\//---------------------------------------------------------------\\  
   
if (cmd === `${prefix}report`){

   let rUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
   if(!rUser) return message.channel.send("Sorry couldnt find user :unamused:");
   let reason = args.join(" ").slice(22);

   let repoted = new Discord.RichEmbed()
   .setTitle("Reported in ***Rocitizens**")
   .setDescription("You have been reported, please bear in mind the administrators now have this report file Thanks.")
   .addField("Report reason:", reason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")
  
      
   let reportembed = new Discord.RichEmbed()
   .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")   
   .setTitle("Moderation Report")
   .setDescription("Moderators need to act on the reported user.")
   .setColor("#2A363B")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Report time", message.createdAt)
   .addField("Report Reason", reason);


   let reportschannel = message.guild.channels.find(`name`, "modlogs");
   if(!reportschannel) return message.channel.send("Couldnt find the specified channel path. :unamused:");
   

   message.delete().catch(O_o=>{});
   reportschannel.send(reportembed);
      message.reply("***User had been reported, if you are fake reporting you will be blacklisted from this server immidiatley.***")  
        if(message.mentions.users.first()) return message.mentions.users.first().send(repoted);
  return;
}
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
   
  if(cmd === `${prefix}kick`){

  let kUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
  if(!kUser) return message.channel.send("User not found. :unamused:");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry you cant kick people.");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.reply("Sorry that user cannot be kicked.");

   let kicksend = new Discord.RichEmbed()
   .setTitle("Kicked from ***Rocitizens***")
   .setDescription("You have been kicked, please bear in mind the administrators now have this kick file Thanks.")
   .addField("Kick reason:", kReason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")      
        
        
  let kEmbed = new Discord.RichEmbed()
   .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png") 
   .setTitle("Moderation Kick")
  .setColor("#2A363B")
  .addField("Kicked User.", `${kUser} with the ID: ${kUser.id}`)
  .addField("Kicked by:", `<@${message.author.username}> with the ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Kick Reason", kReason);

   let kchannel = message.guild.channels.find(`name`, "modlogs");
   if(!kchannel) return message.channel.send("Channnel path not found. :smile:")

  message.guild.member(kUser).kick(kReason);
  kchannel.send(kEmbed);    
  message.reply("***User had been Kicked.***"); 
      if(message.mentions.users.first()) return message.mentions.users.first().send(kicksend);  

  return;
}



 //---------------------------------------------------------------\\//---------------------------------------------------------------\\   
  
   if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
    if(!bUser) return message.channel.send("User not found. :unamused:");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry you cant ban people.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("Sorry that user cannot be banned.");
  
   let bansend = new Discord.RichEmbed()
   .setTitle("Banned from ***Rocitizens***")
   .setDescription("You have been Banned, please bear in mind the administrators now have this kick file Thanks.")
   .addField("Ban reason:", bReason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")
   
         
  
    let bEmbed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/503989504038928396/503991589459329064/ee3ded9a496f2098afb8009f640d653b.png")    
    .setTitle("Moderation Ban")
    .setColor("#2A363B")
    .addField("Banned User.", `${bUser} with the ID: ${bUser.id}`)
    .addField("Banned by:", `<@${message.author.username}> with the ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Banned Reason", bReason);

  
     let bChannel = message.guild.channels.find(`name`, "modlogs");
     if(!bChannel) return message.channel.send("Channnel path not found. :smile:")
  
    message.guild.member(bUser).ban(bReason);
    bChannel.send(bEmbed);    
  message.reply("***User had been Banned.***");
        if(message.mentions.users.first()) return message.mentions.users.first().send(bansend);        

    return;
  }
  
});


bot.login(process.env.BOT_TOKEN);
