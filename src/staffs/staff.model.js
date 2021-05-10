module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define("staff", {
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,

      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      minlength: 5,
      validate: {
        notEmpty: true,
      },
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 20,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    experience: {
      type: DataTypes.STRING,
      maxlength: 500,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Staff;
};
