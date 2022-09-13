module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nome: { 
      type: Sequelize.STRING,
      allowNull: false,
    },
    sobrenome: { 
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: { 
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: { 
      type: Sequelize.STRING,
      allowNull: false,
    },
    token: { 
      type: Sequelize.STRING,
    },
  });
  return User;
};