const massive = require('massive');

const db = massive.connectSync({
  connectionString : 'postgres://postgres:mikhail4@localhost:3001/postgres'
});

exports.getDb = (req, res, next) => {
  console.log('stuff');
  db.run('select * from inventory', (err, database) =>{
    console.log(database);
    res.send(database);
  });
};
exports.increment = (req, res, next) =>{
  db.run([id],'update inventory set quantity = (quantity + 1) where productid = $1', (err, database){
    res.send(database);
  });
};
exports.decrement = (req, res, next) =>{
  db.run([id],'update inventory set quantity = (quantity + 1) where productid = $1', (err, database){
    res.send(database);
  });
};
