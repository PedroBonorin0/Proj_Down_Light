module.exports = (sequelize, Sequelize) => {
  const Carro = sequelize.define("carro", {
    placa: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    modelo: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  return Carro;
};