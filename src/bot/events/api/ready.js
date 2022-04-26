const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Rechard")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Bot Aktif"));

    await client.user.setActivity(require('../../../config/bot').prefix + "help");
    await client.user.setStatus("idle");
}