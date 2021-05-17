const db = require("../model");
const Kurslar = db.kurslar;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const acourses = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    img_title: req.body.img_title,
    card_text: req.body.card_text,
    card_title: req.body.card_title,
    rating: req.body.rating,
  };
  Kurslar.create(acourses)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.findAll = (req, res) => {
  const title = req.query.title;

  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Kurslar.findAll({ where: condition })
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

  Kurslar.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err, "aaaaaaaaaaaaaaaaaaaaaaaa");
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const acourses = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    img_title: req.body.img_title,
    card_text: req.body.card_text,
    card_title: req.body.card_title,
    rating: req.body.rating,
  };
  Kurslar.update(acourses, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send("success");
      } else {
        res.send({
          message: `Cannot update Kurslar with id=${id}. Maybe Kurslar was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Kurslar table with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Kurslar.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Kurslar was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Kurslar with id=${id}. Maybe Kurslar was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Kurslar with id=" + id,
      });
    });
};
