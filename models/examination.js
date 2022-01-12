'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Examination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Examination.belongsToMany(models.Laboratory, {
        through: 'ExaminationsLaboratories',
        foreignKey: 'examinationId', as: 'laboratories'
      })
    }
  };
  Examination.init({
    name: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['analise', 'clinica', 'imagem']],
          msg: "Must be analise or clinica or imagem"
        }
      },
    },
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
    modelName: 'Examination',
  });
  return Examination;
};