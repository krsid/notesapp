console.log("Starting app.js");

const chalk = require("chalk")
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log(chalk.green.inverse("New note created!"));
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log(chalk.green.inverse("Note removed!"));
  notes.removeNote(title);
} else if (command === "read") {
  console.log(chalk.blue.inverse("Your notes:"));
  notes.readNote(title);
} else if (command === "list") {
  console.log(chalk.yellow.inverse("List"));
  notes.getAll();
} else {
  console.log(chalk.green.inverse("Unknown command was used!"));
}