var express = require('express');
var app = express();


app.set('port', process.env.PORT || 80);

app.get('/run', function(req, res){
  var execsync = require('child_process').execSync;
  var query = req.param("q");
  // console.log(query);
  var result = execsync('osqueryi --json '+query);
  res.set('Content-Type','text/json; charset=utf-8');
  //res.set('charset',);
  res.send(result);
});


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
