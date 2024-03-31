const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Feature extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Feature.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      feature_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      roleId: {
        // Foreign key referencing the Role table
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "feature",
      underscored: true,
      tableName: "feature",
    }
  );

  return Feature;
};
