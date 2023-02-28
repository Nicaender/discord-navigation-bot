require("dotenv").config();
module.exports = {
    app: {
        token: process.env.BOT_TOKEN,
        message: "commands",
        global: true,
        guild: "",
    },
    stations: new Map(),
};
