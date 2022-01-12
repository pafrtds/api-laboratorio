const { updateExamination } = require("../../../infrastructure/repositories/examination")
const BadRequestError = require("../../errors/bad_request_error")

module.exports = async function updateExaminationUseCase({ id, rawData } = {}) {
    if (!id) throw new BadRequestError("Is not id.")
    const { name, status, type } = rawData
    return await updateExamination({ name, status, type, id })
}