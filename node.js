const express = require('express');
const path = require('path')
const massive = require('massive');
const cors = require('cors');
const massiveCtrl = require('./src/controllers/massiveCtrl.js');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.use(express.static('build'))

app.get('/inventoryDB', massiveCtrl.getDb);

app.put('/setQuantity',massiveCtrl.setQuantity);

app.put('/removeProduct',massiveCtrl.removeProduct);

app.post('/addProduct',massiveCtrl.addProduct);

app.get('*', (req, res, next)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(3002, () => {console.log('listening on port 3002')});
