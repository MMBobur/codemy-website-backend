module.exports = (sequelize, Sequelize) => {
  const About = sequelize.define("about", {
    img_url: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
  });

  return About;
};
