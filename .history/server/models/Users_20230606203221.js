module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UsersText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Users.associate = (models) => {
      Users.hasMany(models.Comments, {
        onDelete: 'cascade',
      });
    };
    return Users;
  };
  