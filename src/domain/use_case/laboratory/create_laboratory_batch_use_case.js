const { bulkCreateLaboratory } = require("../../../infrastructure/repositories/laboratory")

module.exports = async function createLaboratoryBatchUseCase({ rawData } = {}){
    return await bulkCreateLaboratory(rawData)
}