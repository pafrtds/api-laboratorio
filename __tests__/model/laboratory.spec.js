const db = require("../../models");
const { expect } = require('chai')
const LaboratoryModel = require("../../models/laboratory")
const sequelize = require('sequelize')

describe('laboratory Model', () => {

    let thisDb = db

    // beforeAll(async () => {
    //     await thisDb.sequelize.sync({ force: true })
    // })

    it('model name', async () => {
        const Laboratory = LaboratoryModel(db.sequelize, db.Sequelize.DataTypes)
        const laboratory = new Laboratory()
        expect(laboratory.constructor.name).to.equal('Laboratory')
    })

    it('table name', async () => {
        const Laboratory = LaboratoryModel(db.sequelize, db.Sequelize.DataTypes)
        const laboratory = new Laboratory()
        expect(laboratory.constructor.tableName).to.equal('Laboratories')
    })

    it('fields table', async () => {
        const Laboratory = LaboratoryModel(db.sequelize, db.Sequelize.DataTypes)
        const laboratory = new Laboratory()
        const expectFields = ['name', 'status', 'address']
        expectFields.forEach((field)=>{
            expect(laboratory).to.have.property(field)
        })
    })
})