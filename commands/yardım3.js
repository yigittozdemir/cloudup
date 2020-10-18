const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://media.giphy.com/media/mBkM18U5OMSkTcDmeu/giphy.gif', 'https://media.giphy.com/media/RGRzukK0YNlQbZEUVP/giphy.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım 3 Menüsüne Hoş Geldin Dostum 😇**
\`\`\`${client.user.username} Kullanırken @CloudUP rolünü en yukarıda tutunuz.\`\`\`

❌ **\`${client.ayarlar.prefix}yasak-tag-sistem\`
Sunucunuz için güvenliği arttırın

✨ \`${client.ayarlar.prefix}oto-isim-sistem\`
Sunucunuza giren kullanıcıya istediğiniz şekilde otomatik isim ile adlandırmış yapabilirsin
 
\`${client.ayarlar.prefix}komut-mesaj-sistem\`**
Sunucunuz için istediğiniz kadar **komut & **cevap** oluşturabilirsin**

❕ \`${client.ayarlar.prefix}fake-hesap-sistem\`**
Sunucunuza giren kullanıcı __5 gün__ içerisin de hesabını oluşturmuş ise cezalı verir

🚀 \`${client.ayarlar.prefix}sunucu-tema-sistem\`**
Topluluk bağışları ile sunucu şablonlarına sahip ol! **${client.ayarlar.prefix}sunucu-kur** kullanabilirsin**

🐝 \`${client.ayarlar.prefix}kanal arındır\`**
Sunucunuzda ki tüm **kanalları** silerek yardımcı olur (**Sunucu Sahibi**)

🐝 \`${client.ayarlar.prefix}rol arındır\`
Sunucunuzda ki tüm **rolleri** silerek yardımcı olur (**Sunucu Sahibi**)

**💸 İninal Barkod NO: \`123456789123\`
💸 Papara Hesap NO: \`1234567891\`


💐 CloudUP Youtube Eğitim: :)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y3', 'help3'],
  permLevel: 0
}

exports.help = {
  name: 'yardım3'
};