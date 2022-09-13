const router = require("express").Router();
const db = require("../models");
const Carro = db.carro;
const Op = db.Sequelize.Op;
const auth = require('../middlewares/auth');


router.post("/api/carros", auth, (req, res) => {
  const carro = {
    placa: req.body.placa,
    marca: req.body.marca,
    modelo: req.body.modelo
  };
  
  Carro.create(carro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Carro."
      });
    });
  }
);

router.get("/api/carros", auth, (req, res) => {
  Carro.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Carros."
      });
    });
  }
);

router.get("/api/carros/:id", auth, (req, res) => {
  const id = req.params.id;
  Carro.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Carro with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Carro with id=" + id
      });
    });
  }
);

router.put("/api/carros/:id", auth, (req, res) => {
  const id = req.params.id;
  Carro.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Carro was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Carro with id=${id}. Maybe Carro was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Carro with id=" + id
      });
    });
  }
);

router.delete("/api/carros/:id", auth, (req, res) => {
  const id = req.params.id;
  Carro.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Carro was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Carro with id=${id}. Maybe Carro was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Carro with id=" + id
      });
    });
  }
);

module.exports = router;