module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Comments", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comments;
};
