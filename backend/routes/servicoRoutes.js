const router = require("express").Router();
const db = require("../models");
const Servico = db.servico;
const Op = db.Sequelize.Op;
const auth = require('../middlewares/auth');

router.post("/api/servicos", auth, (req, res) => {
  const servico = {
    nome: req.body.nome,
    preco: req.body.preco,
  };
  
  Servico.create(servico)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Servico."
      });
    });
  }
);

router.get("/api/servicos", auth, (req, res) => {
  Servico.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Servicos."
      });
    });
  }
);

router.get("/api/servicos/:id", auth, (req, res) => {
  const id = req.params.id;
  Servico.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Servico with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Servico with id=" + id
      });
    });
  }
);

router.put("/api/servicos/:id", auth, (req, res) => {
  const id = req.params.id;
  Servico.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Servico was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Servico with id=${id}. Maybe Servico was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Servico with id=" + id
      });
    });
  }
);

router.delete("/api/servicos/:id", auth, (req, res) => {
  const id = req.params.id;
  Servico.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Servico was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Servico with id=${id}. Maybe Servico was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Servico with id=" + id
      });
    });
  }
);

module.exports = router;