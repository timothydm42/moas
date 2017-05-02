const massive = require('massive');
const secret = require('../../.config.js')
const http = require('http').Server(app);
const io = require ('socket.io').listen(5432);

const db =  massive.connectSync({
  connectionString : "postgres://"+secret.dbUsername+":"+secret.dbPassword+"@"+secret.dbEndpoint,
});
const update=db.run('listen inventory')

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
io.sockets.on('connection', function (socket) {
    socket.emit('connected', { connected: true });

    socket.on('ready for data', function (data) {
        pg_client.on('notification', function(title) {
            socket.emit('update', { message: table});
        });
    });
});
