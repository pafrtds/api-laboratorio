'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Laboratory.belongsToMany(models.Examination, {
        through: 'ExaminationsLaboratories',
        foreignKey: 'laboratoryId', as: 'examinations'
      })
    }
  };
  Laboratory.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['ativo', 'inativo']],
          msg: "Must be ativo or inativo"
        }
      },
      defaultValue: 'ativo'
    }
  }, {
    sequelize,
    modelName: 'Laboratory',
  });
  return Laboratory;
};