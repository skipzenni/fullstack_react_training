module.exports = (sequelize, DataTypes) => {
  const   const Posts = sequelize.define("Comments", {
    = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comments;
};
