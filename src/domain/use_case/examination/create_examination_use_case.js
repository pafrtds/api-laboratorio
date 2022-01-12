const db = require("../../../../models")
const { createExamination } = require("../../../infrastructure/repositories/examination")
const BadRequestError = require("../../errors/bad_request_error")

module.exports = async function createExaminationUseCase({ rawData } = {}) {
    const { name, type, status } = rawData
    const examination = await db.Examination.build()
    await examination.validate().catch((error) => {
        throw new BadRequestError(error)
    })
    return createExamination({ name, type, status })

}

