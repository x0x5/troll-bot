const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setImage('https://media.tenor.com/2XVhxkbhzMcAAAAC/nikocado-bailando.gif');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('send gif of nikocado avocado'),
    async execute(interaction) {
        return interaction.reply({ embeds: [exampleEmbed] });
    },
};