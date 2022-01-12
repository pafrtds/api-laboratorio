const { listExaminationAndLaboratories } = require("../../../infrastructure/repositories/examination")
const BadRequestError = require("../../errors/bad_request_error")

module.exports = async function listLaboratoryExaminationUseCase({ name } = {}) {
    if (!name) throw new BadRequestError('Is not a name, name is required!')
    const result = await listExaminationAndLaboratories(name)
    if (result.length === 0) return []
    const responseLaboratories = []
    result.forEach(({ laboratories }) => {
        laboratories.forEach(({ id, name, status, address }) => {
            responseLaboratories.push({ id, name, status, address })
        })
    });
    return responseLaboratories
}   