const express = require('express');
const massive = require('massive');
const cors = require('cors');
const massiveCtrl = require('./src/controllers/massiveCtrl.js');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.use(express.static('build'))

app.get('/inventory', massiveCtrl.getDb);

app.put('/setQuantity',massiveCtrl.setQuantity);

app.put('/removeProduct',massiveCtrl.removeProduct);

app.post('/addProduct',massiveCtrl.addProduct);

app.listen(3002, () => {console.log('listening on port 3002')});
