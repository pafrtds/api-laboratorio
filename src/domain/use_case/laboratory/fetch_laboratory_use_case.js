const { findByPkLaboratory } = require("../../../infrastructure/repositories/laboratory")

module.exports = async function fetchLaboratoryUseCase({ id }){
    return await findByPkLaboratory(id)
}