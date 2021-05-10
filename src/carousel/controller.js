const db = require("../model");
const afoCont = db.carousel;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  console.log("3333");
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  afoCont
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Aforizms.",
      });
    });
};

exports.create = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  console.log("0000000000000000000000000000000000=", req);
  const amember = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    title: req.body.title,
  };

  afoCont
    .create(amember)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Aforizms.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  afoCont
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Aforizm with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  console.log("0000000000000000000000000000000000", req);
  const amember = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    title: req.body.title,
  };

  const id = req.params.id;

  afoCont
    .update(amember, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Aforizm was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Aforizm with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Aforizm with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  afoCont
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Aforizm was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Aforizm with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Aforizm with id=" + id,
      });
    });
};
