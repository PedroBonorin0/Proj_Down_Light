module.exports = (sequelize, Sequelize) => {
  const Funcionario = sequelize.define("funcionario", {
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salario: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    }
  });
  return Funcionario;
};