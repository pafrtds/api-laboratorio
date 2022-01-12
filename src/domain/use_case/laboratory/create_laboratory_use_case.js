const db = require("../../../../models")
const { createLaboratory } = require("../../../infrastructure/repositories/laboratory")

module.exports = async function createLaboratoryUseCase({ rawData }) {
    const { name, address, status } = rawData
    const laboratory = await db.Laboratory.build(rawData)
    await laboratory.validate()
    return await createLaboratory({ name, address, status })
}