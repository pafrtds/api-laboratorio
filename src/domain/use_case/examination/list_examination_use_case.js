const { listExamination } = require("../../../infrastructure/repositories/examination")

module.exports = async function listExaminationUseCase({ name, status, type }) {
    return await listExamination({ name, status, type })
}