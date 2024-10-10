const fs = require('fs');
const path = require('path');

module.exports = {
    // Para comandos formais, poderia haver uma propriedade "data" aqui, mas não é necessária para modais
    async execute(interaction) {
        try {
            // Coleta os dados do modal
            const name = interaction.fields.getTextInputValue('nameUser');
            const email = interaction.fields.getTextInputValue('EmailUser');
            const instagram = interaction.fields.getTextInputValue('instagramUser');
            const tiktok = interaction.fields.getTextInputValue('tiktokUser');
            const shorts = interaction.fields.getTextInputValue('shortsUser');

            // Cria o objeto do usuário
            const newUser = {
                userId: interaction.user.id,
                name: name,
                email: email,
                instagram: instagram,
                tiktok: tiktok,
                youtubeShorts: shorts,
            };

            // Caminho para o arquivo users.json
            const filePath = path.join(__dirname, 'users.json');
            let users = [];

            // Verifica se o arquivo já existe
            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath);
                users = JSON.parse(data);
            }

            // Adiciona o novo usuário e salva no arquivo
            users.push(newUser);
            fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

            // Responde à interação
            await interaction.reply({ content: 'Cadastro realizado com sucesso!', ephemeral: true });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Houve um erro ao processar seu cadastro.', ephemeral: true });
        }
    },
};
