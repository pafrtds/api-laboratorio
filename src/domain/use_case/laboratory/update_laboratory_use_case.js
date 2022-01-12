const { updateLaboratory } = require("../../../infrastructure/repositories/laboratory")
const BadRequestError = require("../../errors/bad_request_error")

module.exports = async function updateLaboratoryUseCase({ id, rawData } = {}) {
    if (!id) throw new BadRequestError("Is not id.")
    const { name, status, address } = rawData
    return await updateLaboratory({ name, status, address, id })
}