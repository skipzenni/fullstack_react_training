module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Users.associate = (models) => {
      Users.hasMany(models.Posts, {
        onDelete: 'cascade',
      });
    };
    Posts.associate = (models) => {
      Posts.hasMany(models.Comments, {
        onDelete: 'cascade',
      });
      Posts.hasMany(models.Likes, {
        onDelete: 'cascade',
      });
    };
    return Users;
  };
  