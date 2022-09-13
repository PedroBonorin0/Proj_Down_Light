require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const db = require('./models');
const cors = require("cors");
const app = express();

const carroRoutes = require('./routes/carroRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const ordemServicoRoutes = require('./routes/ordemServicoRoutes');
const userRoutes = require('./routes/userRoutes');

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("\nDB was recreated!\n");
// });
// db.sequelize.sync({ alter: true }).then(() => {
//   console.log("\nDB is online!\n");
// });
db.sequelize.sync().then(() => {
  console.log("\nDB is online!\n");
});

app.use(carroRoutes);
app.use(funcionarioRoutes);
app.use(servicoRoutes);
app.use(ordemServicoRoutes);
app.use(userRoutes);

app.get('/api/', (req, res) => {
  res.send('Home');
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}.`);
});