const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const popUp = new EmbedBuilder()
    .setColor(0xCAFF1F)
    .setTitle('Bem-Vindo(a) ao The Clippers')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.pinimg.com/564x/e9/50/60/e95060ad65c888baece1293453f3295d.jpg', url: 'https://pt.pinterest.com' })
    .setDescription('Esse é o lugar certo para quem é fera nos cortes e clips da internet! 💥 Participe de competições eletrizantes, desafie outros editores e mostre que você manda nos melhores momentos. 🎬 Seja no TikTok, YouTube ou Instagram, aqui sua criatividade é o limite! 🚀')
    .setThumbnail('https://i.pinimg.com/564x/e9/50/60/e95060ad65c888baece1293453f3295d.jpg')
    .addFields(
        { name: '🏆 Competições semanais', value: 'Envie seu melhor clip e dispute o topo do pódio! 🔥' },
        { name: '\u200B', value: '\u200B' },
    )
    .setImage('https://i.pinimg.com/564x/e9/50/60/e95060ad65c888baece1293453f3295d.jpg')
    .setTimestamp()
    .setFooter({ text: 'The Clippers', iconURL: 'https://i.pinimg.com/564x/e9/50/60/e95060ad65c888baece1293453f3295d.jpg' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("welcome")
        .setDescription('Seja bem-vindo(a) ao the clippers!'),

    async execute(interaction) {
        await interaction.reply({ embeds: [popUp] })
    }
}