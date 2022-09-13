const router = require("express").Router();
const db = require("../models");
const Funcionario = db.funcionario;
const Op = db.Sequelize.Op;
const auth = require('../middlewares/auth');

router.post("/api/funcionarios", auth, (req, res) => {
  const funcionario = {
    cpf: req.body.cpf,
    nome: req.body.nome,
    cargo: req.body.cargo,
    salario: req.body.salario
  };
  
  Funcionario.create(funcionario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Funcionario."
      });
    });
  }
);

router.get("/api/funcionarios", auth, (req, res) => {
  Funcionario.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Funcionarios."
      });
    });
  }
);

router.get("/api/funcionarios/:id", auth, (req, res) => {
  const id = req.params.id;
  Funcionario.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Funcionario with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Funcionario with id=" + id
      });
    });
  }
);

router.put("/api/funcionarios/:id", auth, (req, res) => {
  const id = req.params.id;
  Funcionario.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Funcionario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Funcionario with id=${id}. Maybe Funcionario was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Funcionario with id=" + id
      });
    });
  }
);

router.delete("/api/funcionarios/:id", auth, (req, res) => {
  const id = req.params.id;
  Funcionario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Funcionario was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Funcionario with id=${id}. Maybe Funcionario was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Funcionario with id=" + id
      });
    });
  }
);

module.exports = router;