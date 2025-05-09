const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const pedidoRoutes = require('./routes/pedidoRoute');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/pedidos', pedidoRoutes);

connectDb.sync().then(() =>{
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}).catch(err =>{
  console.error('Erro ao sincronizar database: ', err);
})
