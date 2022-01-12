const db = require('../../../models')
const ExaminationsLaboratory = require('../../../models/examination_laboratory')

function createExaminationsLaboratory(data){
    return db.ExaminationsLaboratory.create(data)
}

module.exports = {
    createExaminationsLaboratory
}