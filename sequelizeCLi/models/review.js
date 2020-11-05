module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    star: {
      type: DataTypes.INT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    privacy: {
      type: DataTypes.STRING,
      defaultValue: "Public"
    }
  });
  return Review;
};