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
