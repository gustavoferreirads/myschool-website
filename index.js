var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./')).listen((process.env.PORT || 8081), function(){
    console.log('Server running on 8081...');
});