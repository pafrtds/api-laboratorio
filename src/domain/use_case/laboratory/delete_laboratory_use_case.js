const { findByPkLaboratory } = require("../../../infrastructure/repositories/laboratory")
const statusTypeEnum = require("../../enums/status_type")
const BadRequestError = require("../../errors/bad_request_error")

module.exports = async function deleteLaboratoryUseCase({ id }){
    if (!id) throw new BadRequestError("Is not id.")
    const laboratory = await findByPkLaboratory(id)
    if (laboratory.status === statusTypeEnum.INACTIVE) throw new BadRequestError('Laboratory is inactive!')
    return await laboratory.destroy()
}