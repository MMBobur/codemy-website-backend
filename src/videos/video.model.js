module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define("videos", {
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,

      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      minlength: 5,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 20,
      validate: {
        notEmpty: true,
      },
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Tutorial;
};
