const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = db.user;
const Op = db.Sequelize.Op;
const auth = require('../middlewares/auth');

router.post("/api/register", async (req, res) => {
  try {
    const { nome, sobrenome, email, password } = req.body;

    if (!(email && password && nome && sobrenome)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ where: { email } });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      nome,
      sobrenome,
      email: email.toLowerCase(),
      password: encryptedUserPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "5h" }
    );
    
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});
  
router.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "5h" }
      );

      user.dataValues.token = token;

      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(400).send("Something went Wrong");
  }

  return res.status(400).send("Invalid Credentials");  
});

router.post("/api/welcome", auth, (req, res) => {
  res.status(200).send("Welcome!");
})

module.exports = router;