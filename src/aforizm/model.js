module.exports = (sequelize, DataTypes) => {
  const Aforizm = sequelize.define("aforizmlar", {
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
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Aforizm;
};
