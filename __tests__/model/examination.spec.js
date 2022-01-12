const db = require("../../models");
const { expect } = require('chai')
const ExaminationModel = require("../../models/examination")
const sequelize = require('sequelize')

describe('examination Model', () => {

    let thisDb = db

    // beforeAll(async () => {
    //     await thisDb.sequelize.sync({ force: true })
    // })

    it('model name', async () => {
        const Examination = ExaminationModel(db.sequelize, db.Sequelize.DataTypes)
        const examination = new Examination()
        expect(examination.constructor.name).to.equal('Examination')
    })

    it('table name', async () => {
        const Examination = ExaminationModel(db.sequelize, db.Sequelize.DataTypes)
        const examination = new Examination()
        expect(examination.constructor.tableName).to.equal('Examinations')
    })

    it('fields table', async () => {
        const Examination = ExaminationModel(db.sequelize, db.Sequelize.DataTypes)
        const examination = new Examination()
        const expectFields = ['name', 'status', 'type']
        expectFields.forEach((field)=>{
            expect(examination).to.have.property(field)
        })
    })
})