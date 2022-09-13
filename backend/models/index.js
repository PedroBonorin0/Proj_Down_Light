const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.carro = require("./carro.js")(sequelize, Sequelize);
db.funcionario = require("./funcionario.js")(sequelize, Sequelize);
db.servico = require("./servico.js")(sequelize, Sequelize);
db.ordemServico = require("./ordemServico.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize, Sequelize);

// ------------------------RELATIONS------------------------

// Funcionario - OrdemServico
db.ordemServico.belongsTo(db.funcionario);
db.funcionario.hasMany(db.ordemServico);

// Carro - OrdemServico
db.ordemServico.belongsTo(db.carro);
db.carro.hasMany(db.ordemServico);

// Servico - OrdemServico
db.ordemServico.belongsTo(db.servico);
db.servico.hasMany(db.ordemServico);




module.exports = db;