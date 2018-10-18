

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");



const bot = new Discord.Client({disableEveryone: true});

bot.on('ready',() => {
bot.user.setActivity("Area 52")
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
  
  if(cmd === `${prefix}slap`){
    let slap = args.join(" ");
    let slape =  new Discord.RichEmbed()
    .setDescription("YOU HAVE SLAPPED SOMEONE.")
    .addField("Slapped person:", slap)
    .setTitle("slap")
    
    message.channel.send(slape)
  }    
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
  
  if(cmd === `${prefix}punch`){
    let slap = args.join(" ");
    let slape =  new Discord.RichEmbed()
    .setDescription("YOU HAVE PUNCHED SOMEONE.")
    .addField("Punched person:", slap)
    .setTitle("Punch log:")
    
    message.channel.send(slape)
  }    
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
  if(cmd === `${prefix}botstats`){
    let embed = new Discord.RichEmbed()
    .setDescription("***AFPU Official Bot®***")
    .addField("Bot ID:", "491638483862159390")
    .addField("Bot Maker:", "<@481171799204429834>")
    
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.channel.send(embed);

   }
}    
 //---------------------------------------------------------------\\//--------------------------------------------------------------- 
  
if(cmd == `${prefix}clientlog`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.channel.send("```lua bot.on.ready = true | bot.heroku.build = true | bot.github = content restricted. | bot.herokupage = https://dashboard.heroku.com/apps/afpu```")
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
  
 if(cmd == `${prefix}scriptplatform`){
    if(message.author.id !== "481171799204429834") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {
      message.reply("Github & Atom.")
    }
} 
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
  if(cmd === `${prefix}help`){
    let embed = new Discord.RichEmbed()
    .setTitle("Help.")
    .setFooter("Official property of AFPU: Command.")
    .setDescription("This is a information page, for more info go down.")
    .addField("More Options:", "Dm a Officer+")
    .addField("More Help Commands:", "-cmds")
    .setThumbnail("https://cdn.discordapp.com/attachments/384133046368206848/493096425484451890/3602266913a7a394fb5f4d1e3061bd03.png")
    .setColor("#2A363B")
    
    message.channel.send(embed)
  }    
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
  
   if(cmd === `${prefix}calender`){
    let embed = new Discord.RichEmbed()
    .setTitle("AFPU Calender")
    .setFooter("Official property of AFPU: Command.")
    .addField("Totoro's Birthday.", "10/10/2018")
    .addField("DragonBossJ1212", "9/9/2005")
    .addField("ScriptedBuilderz", "28,08,2003")
    .addField("PulseValor", "1/1/2002")
    .addField("Tronroks", "10/18/2005") 
    .addField("GreyLuca", "13/08/2001") 
    .addField("xgermanxluigie", "10/15/2000")
    
    .setThumbnail("https://cdn.discordapp.com/attachments/384133046368206848/493096425484451890/3602266913a7a394fb5f4d1e3061bd03.png")
    .setColor("#2A363B")
    
    message.channel.send(embed)
  }    
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
  
  if(cmd === `${prefix}cmds`){
    let embed = new Discord.RichEmbed()
    .setTitle("Commands.")
    .setFooter("Official property of AFPU: Command.")
    .setDescription("This is a commands page, go down for all commands.")
    .addField("More Options:", "Dm a Officer+")
    .addField("More Help Commands:", "-help")
    .addField("Moderation commands:", "-Kick, -Ban, -Report, -Warn.")
    .addField("Fun Commands:", "-Slap, -Punch, -DM, -Say, -calender")
    .addField("Bot Utility commands:", "help, status, shout.")
    .addField("AFPU Commands:", "-shout, -event, -gatecodes, -cctinfo, -sgsocinfo, -sfinfo, -scominfo, -matcominfo, -airmaninfo, -COs")
    .addField("Developer authorization commands:", "-clientlog, -botstats, -networkhost, -devlanguage, -scriptplatform")
    .setThumbnail("https://cdn.discordapp.com/attachments/384133046368206848/493096425484451890/3602266913a7a394fb5f4d1e3061bd03.png")
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
  
if(cmd === `${prefix}shout`){
    
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.reply("Sorry you cannot shout things, its only people with manage messages perms. :)"); 
     let announcement = args.join(" ");
     let embed = new Discord.RichEmbed()
     .setDescription(announcement)
     .setTitle("AFPU: Announcement.")
     .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")
     .setColor("#2A363B")
      message.delete();
     message.channel.send(embed)

}   

 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
  if(cmd == `${prefix}event`){
    let announcement = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/490888085052063745/493089823285051423/baaa25b015bd347a057c42c2956bdda6.png")
    .setTitle("Event being hosted.")
    .addField("Message:", announcement) 
    .setDescription("https://www.roblox.com/games/1185704750/Area-52")
      let officer = message.guild.roles.find("name", "Officer")      
      if(message.member.roles.has(officer.id)) {
         message.channel.send(embed)
         message.channel.send("<@&493091412481671169>")
         message.channel.send("<@&493091586624847892>")
         message.channel.send("<@&493091739222147092>")
      }    else {
         message.reply("Your not an officer.")
      }
}
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
   if(cmd === `${prefix}gatecodes`){
      let cctRole = message.guild.roles.find("name", "CCT")
      let officerrole = message.guild.roles.find("name", "Officer")      
      let embed = new Discord.RichEmbed()
      .setTitle("Gate Destinations")
      .setDescription("These gate keys are not to be leaked ANYWHERE, if we find out you have leaked them there will be serious consequences.")
      .addField("Earth", "1 20 2 21 3 22")
      .addField("Gamma", "1 2 3 4 5 6")
      .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .addField("CLASSIFIED", "##############")
      .setColor("#2A363B")
      if(message.member.roles.has(cctRole.id)) {
         message.author.send(embed)
      }    else {
         message.reply("Nice try trying to gain the gate codes, dont do it again. :warning:")
      }  
           if(message.member.roles.has(officerrole.id)) {
         message.author.send(embed)
      }     
   }      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
 
  if(cmd === `${prefix}cctinfo`){
   let embed = new Discord.RichEmbed()
   .setTitle("CCT rank job information")
   .setDescription("To join CCT apply when the apps are open.")
   .addField("CCT job:", "The CCT (Combat Control Team) man the control room,  there in control of the gate, They also control the iris,")
   .setFooter("CCT - Combat Control Team")
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491718946664218625/782765baea9175279375901ac929e620.png")
   .setColor("#2A363B")
   message.channel.send(embed)
 }    
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
   
 if(cmd === `${prefix}sgsocinfo`){
   let embed = new Discord.RichEmbed()
   .setTitle("SGSOC rank job information")
   .setDescription("To join SGSOC, tryout when the tryouts are open.")
   .addField("SGSOC job:", "The SGSOC (Stargate Special Operations Command) The SGSOC are incharge of entering the stargate, and fighting the aliens, and hostiles.")
   .setFooter("SGSOC  - Stargate special operations command.")
   .setThumbnail("https://cdn.discordapp.com/icons/425827182305345536/38886026b784143da2fac30dd9e9087d.webp")
   .setColor("#2A363B")
   message.channel.send(embed)
 }    
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
      
 if(cmd === `${prefix}sfinfo`){
   let embed = new Discord.RichEmbed()
   .setTitle("SF rank job information")
   .setDescription("To join SF, apply when the apps are open.")
   .addField("SF job:", "The SF (Security Forces) The SF are incharge of maintaining staff, escourting hostiles, and guarding.")
   .setFooter("SF  - Security Forces")
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/384133658270760962/491008004515299345/SF_logo.png")
   message.channel.send(embed)
 }    
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
      
 if(cmd === `${prefix}matcominfo`){
   let embed = new Discord.RichEmbed()
   .setTitle("MATCOM rank job information")
   .setDescription("To join MATCOM, apply when the apps are open.")
   .addField("SGSOC job:", "The MATCOM (Material Command) The MATCOM are incharge of development.")
   .setFooter("MATCOM  - Material command.")
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491719015056670726/a21c8dc10b0cbf544f3f05df42d8c8a6.png")
   .setColor("#2A363B")
   message.channel.send(embed)
 }    
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
   
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\ 
      
 if(cmd === `${prefix}airmaninfo`){
   let embed = new Discord.RichEmbed()
   .setTitle("AIRMAN rank job information.")
   .setDescription("Airman rank description.")
   .addField("AIRMAN job:", "Airman of the units/troops/soldiers of the base, they secure the GR, sweep the floors etcetera, and they secure.")
   .setFooter("Airman  - Official property of the AFPU..")
   .setThumbnail("https://cdn.discordapp.com/attachments/491640462365556747/491661424842637313/E3_USAF_AM1.png")
   .setColor("#2A363B")
   message.channel.send(embed)
 }    
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
      
 if(cmd === `${prefix}COs`){
   let embed = new Discord.RichEmbed()
   .setTitle("Commanding officer of each division.")
   .addField("Security Forces", "TheRareLegend or <@480537647060877323>")
   .addField("Stargate special operations", "mahr10 or <@361496558354563072>")
   .addField("Combat Control Team", "iiiDudz or <@365931656881766431>")
   .addField("Material Command.", "totoro987123 or <@130103736881119233>")
   .setFooter("Official property of the AFPU..")
   .setColor("#2A363B")
   message.channel.send(embed)
 }    
      
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
  
 if(cmd === `${prefix}scominfo`){
   let embed = new Discord.RichEmbed()
   .setTitle("SCOM rank job information.")
   .setDescription("SCOM rank description.")
   .addField("SCOM job:", "SCOM are in charge of flying the planes, and there main position is in the base or in the beta site, with the planes.")
   .setFooter("SCOM  - Space Command")
   .setThumbnail("https://cdn.discordapp.com/attachments/488312295605403659/491963841282834462/Space_Command.png")
   .setColor("#2A363B")
   message.channel.send(embed)
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
   .setTitle("Reported in ***AFPU: Communications.**")
   .setDescription("You have been reported, please bear in mind the administrators now have this report file Thanks.")
   .addField("Report reason:", reason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")
  
      
   let reportembed = new Discord.RichEmbed()
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")   
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
   .setTitle("Kicked from ***AFPU: Communications.***")
   .setDescription("You have been kicked, please bear in mind the administrators now have this kick file Thanks.")
   .addField("Kick reason:", kReason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")      
        
        
  let kEmbed = new Discord.RichEmbed()
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png") 
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
   .setTitle("Banned from ***|-| SCPF |-| Secure Contain Protect***")
   .setDescription("You have been Banned, please bear in mind the administrators now have this kick file Thanks.")
   .addField("Ban reason:", bReason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")
   
         
  
    let bEmbed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/426090985475538954/491717416355889172/Possible_AFPU.png")    
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
