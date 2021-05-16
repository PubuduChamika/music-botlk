const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription("Leaving the voice channel because I think there are no songs in the queue. If you like the bot stay 24/7 in voice channel run `.afk` **-----Thank you for using me!**")
    .setFooter("Something went wrong :(")
    await channel.send(embed)
}
