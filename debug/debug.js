var express = require('express'),
  serveStatic = require('serve-static'),
  path = require('path'),
  app = express(),
  isRelease = process.argv.filter(function (a) {
    return a == 'release'
  }).length > 0,
  rootDir = isRelease ? path.join(__dirname, '..', 'publish', 'dist') : path.join(__dirname, '..');

app.use('/images', serveStatic(path.join(rootDir, 'images')));
app.use('/assets', serveStatic(path.join(rootDir, 'assets')));
app.use('/js', serveStatic(path.join(rootDir, 'js')));
app.use('/app', serveStatic(path.join(rootDir, 'app')));
app.all('/*', function (req, res) {
  res.sendFile(path.join(rootDir, 'index.html'));
});

var server = app.listen(9000, function () {
  console.log('App running in %s mode on port %s', isRelease ? 'Release' : 'Debug', server.address().port);
});
