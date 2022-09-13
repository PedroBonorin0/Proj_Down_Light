const {
  HOST,
  USER,
  PASSWORD,
  DB
} = process.env;

module.exports = {
  HOST: String(HOST),
  USER: String(USER),
  PASSWORD: String(PASSWORD),
  DB: String(DB),
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};