const db = require("../model");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const amember = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    title: req.body.title,
    text: req.body.text,
    Url: req.body.Url,
  };

  Tutorial.create(amember)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the videos.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving videos.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving video with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const amember = {
    img_url:
      req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
    title: req.body.title,
    text: req.body.text,
    Url: req.body.Url,
  };

  const id = req.params.id;

  Tutorial.update(amember, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "video was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update video with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating video with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "video was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Staff with id=${id}. Maybe video was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete video with id=" + id,
      });
    });
};
