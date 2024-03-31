const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define association with Role model
      User.belongsTo(models.role, {
        foreignKey: "roleId", // Foreign key in the User table
        targetKey: "id", // Primary key in the Role table
        as: "role", // Alias for the association
      });
    }
  }

  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Default value for UUID
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER,
      email_verified: DataTypes.INTEGER,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      roleId: DataTypes.INTEGER, // Foreign key column for Role
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
