const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
const client = new Discord.Client
const cooldowns = new Discord.Collection();




const prefix = 'mr';

client.once('ready', () => {
    console.log('working')
    const channel = client.channels.cache.get('761348067810213908');
    channel.send('I am online! 🟢')

    
   

    
   
    
    
}) 



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(/ +/);

    switch(args[0]){


        case "help":
            const help = new Discord.MessageEmbed()
            .setTitle(`Hey, ${message.author.username} We are here to help`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setColor('7982DA')
            .setDescription('Hi, Thanks for being intrested in Mr.Wiggles. **ALL** commands start with: mr\n\n\n✅  Useful\n`avatar`\n\n❌ Not useful\n`owo`\n\n⚙️ Server admins\n`None Here yet`\n\nFor more help click [here](https://docs.mrwiggles.cf/)')
            .setFooter(`Reqested by: ${message.author.username}`, message.author.displayAvatarURL())
            .setTimestamp()
            if(!args[1]){
                message.channel.send(help).then(sentMessage =>{
                    const channel = client.channels.cache.get('761348067810213908')
                    channel.send(`${message.author.tag} Ran the command Help!`)
                })
                break;
            }
            
            


        break;




        case "avatar":
            const av = new Discord.MessageEmbed()
            .setTitle('Your avatar:')
            .setImage(message.author.displayAvatarURL())
            .setFooter(`Reqested by: ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor('7982DA')
            if(!args[1]){
                message.channel.send(av).then(sentMessage =>{
                    const channel = client.channels.cache.get('761348067810213908')
                    channel.send(`${message.author.tag} Ran the command avatar!`)
                })
                break;
            }



        case "owo":
            message.channel.send('Sorry OWO PUPPY is dead. I was the imposter')
            break;




        case "news":           
        const Embed = new Discord.MessageEmbed()
            .setColor('0xFFC300')
            .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744511779614490664/tenor.gif')
            .setTitle('Looks like you need some help! We are here to help')
            .setDescription('News Command: `mrnews [news]`')
            .setFooter('Sent By our dev team @ SeanLovesBlobs Develpomet')
            


            if(!args[1]){
                message.channel.send(Embed);
                break;
            }
            
            let msgArgs = args.slice(1).join(" ")

            message.channel.send("NEWS: " + "**" + msgArgs + "**").then(sentMessage => {
                message.delete({ timeout: 5000, reason: 'It had to be done.' });
            });


        break;







        case "contribute":
            const contribute = new Discord.MessageEmbed()
            .setTitle('Do you want to contribue to Mr.Wiggles?')
            .setDescription('')

        

    





        
            
    




        

        
    

            

            


               
            



    }


            
            
                

    

    
    

    



    
    
});



client.login('Token');
