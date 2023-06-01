module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Comments", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comments;
};
