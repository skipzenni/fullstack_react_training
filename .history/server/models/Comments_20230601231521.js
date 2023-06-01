module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comments;
};
