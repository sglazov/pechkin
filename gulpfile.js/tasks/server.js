const browserSync = require('browser-sync');
const server = browserSync.create();

const config = require('../config.js');


function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      directory: true,
      baseDir: config.build.mails
    },
    notify: false,
    port: 8000
  });
  done();
}

exports.reload = reload;
exports.serve = serve;
