module.exports = (sequelize, DataTypes) => {
  const Dasturlash_tillari = sequelize.define("dasturlash_tillari", {
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
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Dasturlash_tillari;
};
