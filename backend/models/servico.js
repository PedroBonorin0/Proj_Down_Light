module.exports = (sequelize, Sequelize) => {
  const Servico = sequelize.define("servico", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  return Servico;
};