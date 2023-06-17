module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes", {
      commentBody: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Likes;
  };
  