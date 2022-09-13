const router = require("express").Router();
const db = require("../models");
const OrdemServico = db.ordemServico;
const Op = db.Sequelize.Op;
const auth = require('../middlewares/auth');

router.post("/api/ordemServicos", auth, (req, res) => {
  const { carro, servico, funcionario, data } = req.body;

  const ordemServico = { data };

  let novaOrdemServico, carroRel, servicoRel, funcionarioRel;

  OrdemServico.create(ordemServico)
    .then(data => {
      novaOrdemServico = data;

      return db.carro.findByPk(carro);
    })
    .then(data => {
      carroRel = data;

      return db.funcionario.findByPk(funcionario);
    })
    .then(data => {
      funcionarioRel = data;

      return db.servico.findByPk(servico);
    })
    .then(data => {
      servicoRel = data;

      novaOrdemServico.setCarro(carroRel);
      novaOrdemServico.setServico(servicoRel);
      novaOrdemServico.setFuncionario(funcionarioRel);
      
      return db.ordemServico.update({ precoTotal: servicoRel.preco }, { where: { id: novaOrdemServico.id } });
    }).then((data) => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating OrdemServico."
      });
    });
});

router.get("/api/ordemServicos", auth, (req, res) => {
  OrdemServico.findAll({ include: ["carro", "servico", "funcionario"]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OrdemServicos."
      });
    });
  }
);

router.get("/api/ordemServicos/:id", auth, (req, res) => {
  const id = req.params.id;
  OrdemServico.findByPk(id, { include: ["carro", "servico", "funcionario"]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find OrdemServico with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving OrdemServico with id=" + id
      });
    });
  }
);

router.put("/api/ordemServicos/:id", auth, (req, res) => {
  const id = req.params.id;
  OrdemServico.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrdemServico was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update OrdemServico with id=${id}. Maybe OrdemServico was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OrdemServico with id=" + id
      });
    });
  }
);

router.delete("/api/ordemServicos/:id", auth, (req, res) => {
  const id = req.params.id;
  OrdemServico.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrdemServico was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete OrdemServico with id=${id}. Maybe OrdemServico was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OrdemServico with id=" + id
      });
    });
  }
);

module.exports = router;