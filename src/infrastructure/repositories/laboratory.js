const db = require('../../../models/index')
const Laboratory = require('../../../models/laboratory')

function createLaboratory({ name, address, status }) {
    return db.Laboratory.create({ name, address, status })
}

function listLaboratory({ name, address, status } = {}) {
    return db.Laboratory.findAll({ where: buildWhere({ name, address, status }) })
}

function deleteLaboratory(id) {
    return db.Laboratory.destroy({ where: { id } })
}

function updateLaboratory({ name, address, status, id }) {
    return db.Laboratory.update({ name, address, status }, { where: { id } })
}

function findByPkLaboratory(id) {
    return db.Laboratory.findByPk(id)
}

function bulkCreateLaboratory(laboratories) {
    return db.Laboratory.bulkCreate(laboratories)
}

function buildWhere({ name, address, status }) {
    let where = {}
    if (name) where.name = name
    if (address) where.address = address
    if (status) where.status = status

    return where
}
module.exports = {
    createLaboratory,
    listLaboratory,
    deleteLaboratory,
    updateLaboratory,
    findByPkLaboratory,
    bulkCreateLaboratory
}