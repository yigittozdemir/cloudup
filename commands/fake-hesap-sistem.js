const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('CloudUP Fake Hesap Sistem').setDescription(`
\`${client.ayarlar.prefix}yeni-üye-role [@rolEtiket]\`
**Sunucunuza giren kullanıcılara verilen rolü etiketle**

\`${client.ayarlar.prefix}fake-cezalı-role [@rolEtiket]\`
**Sunucunuz içerisinde ki cezalı rolünü etiketle**

\`\`\`Kapatmak istediğin komutlar aşağıda\`\`\`

\`${client.ayarlar.prefix}yeni-üye-role-kapat\`
**Ayarlı olan kayıtsız rol kapatır**

\`${client.ayarlar.prefix}fake-cezalı-role-kapat\`
**Ayarlı olan fake cezalı rol kapatır**`).setImage('https://media.giphy.com/media/LRBO9V2gJsk3vZOSPL/giphy.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'fake-hesap-sistem'
};