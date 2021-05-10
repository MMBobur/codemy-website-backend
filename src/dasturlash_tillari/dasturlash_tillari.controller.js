const db = require("../model");
const Dasturlash_tillari = db.dasturlash_tillari;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.file) {
    console.log("file undefined");
  }
  const acourses = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    img_title: req.body.img_title,
    text: req.body.text,
  }
  Dasturlash_tillari.create(acourses)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      })
    });
};
exports.findAll = (req, res) => {
  const title = req.query.title;

  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Dasturlash_tillari.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Dasturlash_tillari.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const acourses = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    img_title: req.body.img_title,
    text: req.body.text,
  }
  Dasturlash_tillari.update(acourses, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send("success");
      } else {
        res.send({
          message: `Cannot update dasturlash_tillari with id=${id}. Maybe dasturlash_tillari was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating dasturlash_tillari table with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Dasturlash_tillari.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "dasturlash_tillari was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete dasturlash_tillari with id=${id}. Maybe dasturlash_tillari was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete dasturlash_tillari with id=" + id,
      })
    })
};
