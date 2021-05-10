const Joi = require("@hapi/joi");

module.exports = {
  auth: {
    body: {
      inn: Joi.string().required(),
      psw: Joi.string().required(),
    },
  },

  addNew: {
    body: {
      img_url: Joi.string().required(),
      img_title: Joi.string().required(),
    },
  },

  updateOne: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      img_url: Joi.string().required(),
      img_title: Joi.string().required(),
    },
  },

  deleteOne: {
    params: {
      id: Joi.string().required(),
    },
  },
}