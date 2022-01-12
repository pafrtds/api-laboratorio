const { bulkExamination } = require("../../../infrastructure/repositories/examination")

module.exports = async function createExaminationBatchUseCase({ rawData } = {}){
    return await bulkExamination(rawData)
}