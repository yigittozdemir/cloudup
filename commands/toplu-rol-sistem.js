const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('CloudUP Toplu Rol Sistem').setDescription(`
☀️ \`${client.ayarlar.prefix}Trol-al\`
Sunucunuzda ki üyelerin üzerinde olan **ROL ID** girerek hepsinden rolü kaldırır

☀️ \`${client.ayarlar.prefix}Trol-ver\`
Sunucunuzda ki üyelerinize bir **ROL ID** girerek hepsine o rolü verir`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'toplu-rol-sistem'
};