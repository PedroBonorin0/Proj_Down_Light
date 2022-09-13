module.exports = (sequelize, Sequelize) => {
  const OrdemServico = sequelize.define("ordemservico", {
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    precoTotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0
    },
  });
  return OrdemServico;
};