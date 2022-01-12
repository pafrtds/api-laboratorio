const { listLaboratory } = require("../../../infrastructure/repositories/laboratory")

module.exports = async function listLaboratoryUseCase({ name, address, status } = {}){
    return await listLaboratory({ name, address, status })
}