const { REST, Routes } = require("discord.js")
const dotenv = require('dotenv')
const fs = require("node:fs")
const path = require("node:path")

dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    
    // Verificar se o comando tem a propriedade 'data' e o método 'toJSON'
    if (command.data && typeof command.data.toJSON === 'function') {
        commands.push(command.data.toJSON())
    } else {
        console.warn(`Comando ${file} não possui 'data' ou 'toJSON' não é uma função.`)
    }
}

const rest = new REST({ version: "10" }).setToken(TOKEN)

;(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos...`)
        
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands }
        )
        
        console.log("Comandos registrados com sucesso:", data)
    } catch (error) {
        console.error("Erro ao registrar comandos:", error)
    }
})()
