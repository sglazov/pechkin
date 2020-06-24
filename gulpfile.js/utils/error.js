/**
 * Штука-помогатор для вывода ошибок сборки
 */
const log = require('fancy-log');

module.exports = function(error) {
  log([
    error
  ].join('\n\n'));
  this.emit('end');
};
