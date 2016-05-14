var express = require('express');
var app = express();


app.set('port', process.env.PORT || 80);

app.get('/run', function(req, res){
  var exec = require('child_process').exec;
  var query = req.param("q");
  // console.log(query);
  exec('osqueryi --json '+query,(error, stdout, stderr)=>{
    res.set('Content-Type','text/json; charset=utf-8');
    //res.set('charset',);
    res.send(stdout);
  });

});


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
