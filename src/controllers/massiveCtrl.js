const express = require('express');
const massive = require('massive');
const secret = require('../../.config.js')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io').listen(3003);
const pg = require('pg');

const db = massive.connectSync({
    connectionString : "postgres://"+secret.dbUsername+":"+secret.dbPassword+"@"+secret.dbEndpoint,
});

exports.getDb = (req, res, next) => {
    db.run('select * from inventory order by productname', (err, database) => {
      res.send(database);
    });
};

exports.setQuantity = (req,res,next) => {
  db.inventory.save({productid:req.body.productid,quantity:req.body.quantity,},(err,row)=>{
    if(err)console.log(err);
    res.send(row)
  })
  db.run('notify "changed"');
}

exports.addProduct = (req,res,next) => {
  db.inventory.save({productname:req.body.productname.toLowerCase(),quantity:req.body.quantity},(err,row)=>{
    if(err)console.log(err);
    res.send(row)
  })
  db.run('notify "changed"');
}

exports.removeProduct = (req,res,next) => {
  console.log(req.body)
  db.run('delete from inventory where productname = $1',[req.body.productname.toLowerCase()],(err,row)=>{
    if(err)console.log(err);
    console.log(row)
    res.send(row)
  })
  db.run('notify "changed"');
}

let connectionString = db.connectionString;
const pg_client = new pg.Client(connectionString);
pg_client.connect();

pg_client.query('LISTEN changed', () => {
    console.log('connected to postgres');
});
io.on('connection', (socket) => {
    socket.emit('connected', {connected: true});
    console.log('user connected');
    socket.on('ready for data', (data) => {
      console.log('ready for data');
        pg_client.on('notification', function(title) {
            console.log('received notification');
            console.log(title);
            socket.emit('update', {message: title});
        });
    });
});
