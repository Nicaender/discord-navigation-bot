const { readdirSync } = require("fs");
const { Collection } = require("discord.js");

module.exports = (client) => {
    client.commands = new Collection();
    CommandsArray = [];

    const events = readdirSync("./discord/events/").filter((file) =>
        file.endsWith(".js")
    );

    console.log(`Loading events...`);

    for (const file of events) {
        const event = require(`../discord/events/${file}`);
        console.log(`-> [Loaded Event] ${file.split(".")[0]}`);
        client.on(file.split(".")[0], event.bind(null, client));
        delete require.cache[require.resolve(`../discord/events/${file}`)];
    }

    const commands = readdirSync("./discord/commands/").filter((file) =>
        file.endsWith(".js")
    );

    console.log(`Loading commands...`);

    for (const file of commands) {
        const command = require(`../discord/commands/${file}`);
        if (command.name && command.description) {
            CommandsArray.push(command);
            console.log(`-> [Loaded Command] ${command.name.toLowerCase()}`);
            client.commands.set(command.name.toLowerCase(), command);
            delete require.cache[
                require.resolve(`../discord/commands/${file}`)
            ];
        } else console.log(`[failed Command]  ${command.name.toLowerCase()}`);
    }

    client.on("ready", (client) => {
        if (client.config.app.global)
            client.application.commands.set(CommandsArray);
        else
            client.guilds.cache
                .get(client.config.app.guild)
                .commands.set(CommandsArray);
    });
};
