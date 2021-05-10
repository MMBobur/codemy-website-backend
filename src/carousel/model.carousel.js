module.exports = (sequelize, DataTypes) => {
    const Carousel = sequelize.define("carousel", {
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
    });
  
    return Carousel;
  };
  