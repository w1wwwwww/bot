const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Mass ping person')
		.addUserOption(option => option.setName('target').setDescription('The member to kick').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
        await interaction.reply(`${member}`);

        for(let i = 0; i <= 9007199254740991; i++) {
            await interaction.followUp(`${member}`);
        }
		return interaction.followUp(`${member}`);
	},
};