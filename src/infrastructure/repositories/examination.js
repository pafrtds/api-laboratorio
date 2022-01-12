const db = require('../../../models/index')
const Examination = require('../../../models/examination')

function createExamination({ name, type, status }) {
    return db.Examination.create({ name, type, status })
}

function listExaminationAndLaboratories(name) {
    return db.Examination.findAll({
        attributes: [],
        where: { name: name },
        include: {
            model: db.Laboratory,
            as: 'laboratories',
            required: true,
            attributes: ['id', 'name', 'status', 'address']
        }
    })
}

function deleteExamination(id) {
    return db.Examination.destroy({ where: { id } })
}

function updateExamination({ name, type, status, id }) {
    return db.Examination.update({ name, type, status }, { where: { id } })
}

function findByPkExamination(id) {
    return db.Examination.findByPk(id)
}


function listExamination({ name, type, status } = {}) {
    return db.Examination.findAll({ where: buildWhere({ name, type, status }) })
}

function bulkExamination(examinations) {
    return db.Examination.bulkCreate(examinations)
}

function buildWhere({ name, type, status }) {
    let where = {}
    if (name) where.name = name
    if (type) where.type = type
    if (status) where.status = status
    return where
}

module.exports = {
    createExamination,
    listExaminationAndLaboratories,
    deleteExamination,
    updateExamination,
    findByPkExamination,
    listExamination,
    bulkExamination
}

