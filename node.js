const express = require('express');
const cors = require('cors');
const massiveCtrl = require('./src/controllers/massiveCtrl.js');
const app = express();

app.use(cors());

app.use(express.static('build'))

app.get('/inventory', massiveCtrl.getDb);
app.put('/inventory/increment:id', massiveCtrl.increment);
app.put('/inventory/decrement:id', massiveCtrl.decrement);

app.listen(3002, () => {console.log('listening on port 3002')});
