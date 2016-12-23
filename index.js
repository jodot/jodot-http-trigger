var restify = require('restify');

process.on('message', function(params) {

  function respond(req, res, next) {
    console.log('Function triggered');
    process.send({ do: 'jodot-alive' });
    res.send('triggered ' + req.params.name);
    next();
  }

  function basicAuth (req, res, next) {
    res.header('WWW-Authenticate','Basic realm="Duty Trigger"');

    if (typeof req.authorization.basic !== 'undefined' && 
      (req.authorization.basic.username === params[0]) && 
      (req.authorization.basic.password === params[1])) {
      return next();
    } else {
      res.send(401);
      return next(false);      
    }
  };

  var server = restify.createServer();
  server.use(restify.authorizationParser());
  server.get('/:name', basicAuth, respond);
  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

});