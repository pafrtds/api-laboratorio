const { createExaminationsLaboratory } = require("../../../infrastructure/repositories/examination_laboratory")

module.exports = async function laboratoryExaminationUseCase({ rawData }){
    return await createExaminationsLaboratory(rawData)
}