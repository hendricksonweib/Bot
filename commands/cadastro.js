const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    // Definindo o comando com um SlashCommandBuilder
    data: new SlashCommandBuilder()
        .setName('cadastro')
        .setDescription('Formulario de cadastro'),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('Cadastro para Competições');

        const nameUserId = new TextInputBuilder()
            .setCustomId('nameUser')
            .setLabel("Qual seu nome?")
            .setStyle(TextInputStyle.Short);

        const EmailUser = new TextInputBuilder()
            .setCustomId('EmailUser')
            .setLabel("Digite seu email")
            .setStyle(TextInputStyle.Short);

        const instagramUser = new TextInputBuilder()
            .setCustomId('instagramUser')
            .setLabel("Qual sua conta do Instagram?")
            .setStyle(TextInputStyle.Short);

        const tiktokUser = new TextInputBuilder()
            .setCustomId('tiktokUser')
            .setLabel("Qual sua conta do TikTok?")
            .setStyle(TextInputStyle.Short);

        const shortsUser = new TextInputBuilder()
            .setCustomId('shortsUser')
            .setLabel("Qual sua conta do YouTube Shorts?")
            .setStyle(TextInputStyle.Short);

        // Adiciona inputs ao modal
        const firstActionRow = new ActionRowBuilder().addComponents(nameUserId);
        const secondActionRow = new ActionRowBuilder().addComponents(EmailUser);
        const thirdActionRow = new ActionRowBuilder().addComponents(instagramUser);
        const fourthActionRow = new ActionRowBuilder().addComponents(tiktokUser);
        const fifthActionRow = new ActionRowBuilder().addComponents(shortsUser);

        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow, fifthActionRow);

        // Mostra o modal ao usuário
        await interaction.showModal(modal);
    }
};
