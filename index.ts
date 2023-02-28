import { getStations } from "./src/functions/getStations";

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ],
    disableMentions: "everyone",
});

client.config = require("./discord/config");
getStations().then((stations) => {
    client.config.stations = stations;
});

require("./discord/loader")(client);

client.login(client.config.app.token);
