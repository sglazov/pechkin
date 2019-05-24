const log    = require('fancy-log');
const beeper = require('beeper');
const chalk  = require('chalk');


module.exports = function(error) {
  log([
    chalk.white.bgRed.bold(error.name + ' in ' + error.plugin)
    + ': ' +
    chalk.red(error.message)
    + '\n' +
    chalk.white.bgRed.bold(error.fileName)
  ].join('\n\n'));
  beeper();
  this.emit('end');
};
