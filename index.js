var express = require('express'),
    path = require('path'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qburst',
    database: 'facemash'
});
connection.connect();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.get('/scripts', function(req, res) {
    var first = req.query.first;
    var second = req.query.second;
    var obj = {};
    console.log(req.connection.remoteAddress);
    connection.query('select * from details where id=' + first, function(err, rows, fields) {
        obj.first=rows;
    })
    connection.query('select * from details where id=' + second, function(err, rows, fields) {
        obj.second=rows;
        res.send(obj)
    })
})
app.get('/update',function(req, res){
	var hits = req.query.hits;
	var id = req.query.id;
    var query = 'update details set hits=' + hits + ' where id=' + id;
	connection.query(query,function(err, rows, fields){
        res.send(200);
	})
})
app.get('/fetch',function(req, res){
    connection.query('select * from details',function(err, rows, fields){
        res.send(rows);
    })
})


server.listen(8085);
console.log('Listening on port 8085...');
