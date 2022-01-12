const { findByPkExamination } = require("../../../infrastructure/repositories/examination")

module.exports = async function fetchExaminationUseCase({ id }){
    return await findByPkExamination(id)
}