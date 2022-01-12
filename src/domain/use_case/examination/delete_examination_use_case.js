const { findByPkExamination } = require("../../../infrastructure/repositories/examination")

module.exports = async function deleteExaminationUseCase({ id }){
    const examination = await findByPkExamination(id)
    return await examination.destroy() 
}