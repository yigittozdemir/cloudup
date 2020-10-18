const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  message.channel.send(new Discord.MessageEmbed().setTitle('CloudUP Mesaj Tag Sistem').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
  .setImage('https://media.giphy.com/media/jVB4Q9pSozGlMRSaQW/giphy.gif')
  .setDescription(`\`${client.ayarlar.prefix}tag\`
  **Tagınızı yada simgenizi koyarak aktif edersiniz**
  
  \`${client.ayarlar.prefix}tag kapat\`
  **Tag mesaj sisteminin kapatırsınısz**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'mesaj-tag'
};