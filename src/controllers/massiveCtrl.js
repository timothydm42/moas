const massive = require('massive');
const secret = require('../../.config.js');

const db =  massive.connectSync({
  connectionString : "postgres://"+secret.dbUsername+":"+secret.dbPassword+"@"+secret.dbEndpoint
});

exports.getDb = (req, res, next) => {
  db.run('select * from inventory', (err, database) =>{
    res.send(database);
  });
};

exports.incrementProduct = (req, res, next) => {
  db.run("update inventory set quantity = (quantity + 1) where productname = $1", [param1], (err,result) => {
    res.send(database);
  });
}
