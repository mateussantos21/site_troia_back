const mysql = require('mysql');
var config = require('./config.json');

var express = require("express"),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

app.use('/', express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'O piaui é feio demais' }));
app.use('/', router);

router.get('/equipe', (req, res) =>{
    execSQLQuery('SELECT * FROM ' + config.EquipeTable, res);
})

router.get('/areas', (req, res) =>{
    execSQLQuery('SELECT * FROM ' + config.AreasTable, res);
})

router.get('/robos', (req, res) =>{
    execSQLQuery('SELECT * FROM ' + config.RobosTable, res);
})

router.get('/placas', (req, res) =>{
    execSQLQuery('SELECT * FROM ' + config.PlacasTable, res);
})

router.get('/patrocinadores', (req, res) =>{
    execSQLQuery('SELECT * FROM ' + config.PatrocinadoresTable, res);
})

router.get('/rodape', (req, res) =>{
    execSQLQuery('SELECT * FROM ' + config.RodapeTable, res);
})

app.listen(port, () => {
    console.log("Server running on port " + port);
});


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host: config.hostString,
        user: config.userString,
        password: config.passwordString,
        database: config.databaseString
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    });

    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }

entriesIteration = function(entries) {
    var requestList = [];
    (entries).forEach(object => {
      var Request = {};
      for(var key in object) {
        Request[key] = object[key]._;
      };
      requestList.push(Request);
    });
    return requestList;
  }
