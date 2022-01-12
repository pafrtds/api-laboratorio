'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ExaminationsLaboratory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ExaminationsLaboratory.belongsTo(models.Laboratory, { foreignKey: 'laboratoryId' })
			ExaminationsLaboratory.belongsTo(models.Examination, { foreignKey: 'examinationId' })
		}
	};
	ExaminationsLaboratory.init({
		laboratoryId: {
			type: DataTypes.INTEGER,
			references: { model: 'Laboratory', key: 'id' }
		},
		examinationId: {
			type: DataTypes.INTEGER,
			references: { model: 'Examination', key: 'id' }
		},
	}, {
		sequelize,
		modelName: 'ExaminationsLaboratory',
	});
	return ExaminationsLaboratory;
};