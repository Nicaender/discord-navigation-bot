const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "navigate",
    description: "Navigate from one station to another station",
    options: [
        {
            name: "from",
            description: "The station from which you want to travel",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "to",
            description: "The station to which you want to travel",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "time",
            description: "The time at which you want to travel [HH:MM] or now",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    async execute({ inter }) {
        return inter.reply("This command is not yet implemented");
    },
};
