const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#000001')
.setTitle('CloudUP Tag Rol & Kanal')
.setDescription(`\`${client.ayarlar.prefix}rol-tag 🚀\`
**Lütfen tag ayarlayınız başlamadan önce**

\`${client.ayarlar.prefix}tag-role [@rolEtiket]\`
Sunucunuz da **tag** alan üyeye verilecek rolü etiketle

\`${client.ayarlar.prefix}tag-log [#kanalEtiket]\`
**Tag** alan & çıkaran üyeleri kanala bilgi olarak gönderir

\`\`\`Sıfırlama Komutları\`\`\`
\`${client.ayarlar.prefix}tagrole-sil\`
**Tagın ayarlı olan rolü siler**

\`${client.ayarlar.prefix}tag-log-kapat\`
**Ayarladığınız tag kanalı sıfırlar**

📢 Sistem Nasıl Çalışır?
**Buradaki herşeyi kurduktan sonra, \`Tag\` alan veya cıkartanın sunucunuz da herhangi bir kanala msj yazması durumunda alıp vermektedir.**
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tagrol-sistem'
};