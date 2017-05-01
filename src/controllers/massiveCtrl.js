const massive = require('massive');
const secret = require('../../.config.js')

const db =  massive.connectSync({
  connectionString : "postgres://"+secret.dbUsername+":"+secret.dbPassword+"@"+secret.dbEndpoint,
});

exports.getDb = (req, res, next) => {
  console.log('stuff');
  db.run('select * from inventory', (err, database) =>{
    console.log(database);
    res.send(database);
  });
};
