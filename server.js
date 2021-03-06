const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Testando o git flow
// Iniciando o DB
mongoose.connect(
  "mongodb://mongo:27017/nodeapi",
  { useNewUrlParser: true }
);

requireDir("./src/models")

app.use('/api', require('./src/routes'));

app.listen(3001);
