const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.feature, {
        foreignKey: "roleId", // Foreign key in the features table referencing the Role table
        as: "features", // Alias for the association
      });
    }
  }

  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      feature_access: {
        type: DataTypes.ENUM("none", "read", "write"),
        defaultValue: "none",
      },
    },
    {
      sequelize,
      modelName: "role",
      underscored: true,
      tableName: "role",
    }
  );

  return Role;
};
