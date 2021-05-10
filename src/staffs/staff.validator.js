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
      name: Joi.string().required(),
      surname: Joi.string().required(),
      email: Joi.string().required(),
      experience: Joi.string().required(),
    },
  },

  updateOne: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      img_url: Joi.string().required(),
      name: Joi.string().required(),
      surname: Joi.string().required(),
      email: Joi.string().required(),
      experience: Joi.string().required(),
    },
  },

  deleteOne: {
    params: {
      id: Joi.string().required(),
    },
  },
};
