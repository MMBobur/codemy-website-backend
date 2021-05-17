module.exports = (sequelize, DataTypes) => {
  const Kurslar = sequelize.define("kurslar", {
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
    img_title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
    card_text: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
    card_title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Kurslar;
};
