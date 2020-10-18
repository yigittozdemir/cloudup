const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('CloudUP Kısıtlı Koruma')
.addField('Selam karşılama için', `\`\`\`${client.ayarlar.prefix}selam aç & ${client.ayarlar.prefix}selam kapat\`\`\``)
.addField('Küfür Kısıtlamak', `\`\`\`${client.ayarlar.prefix}küfür kısıt & ${client.ayarlar.prefix}küfür kapat\`\`\``)
.addField('Reklam Kısıtlamak', `\`\`\`${client.ayarlar.prefix}reklam kısıt & ${client.ayarlar.prefix}reklam kapat\`\`\``)
.addField('Büyük Harf Kısıtlamak', `\`\`\`${client.ayarlar.prefix}caps kısıt & ${client.ayarlar.prefix}caps kapat\`\`\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kısıtlamalar'
};