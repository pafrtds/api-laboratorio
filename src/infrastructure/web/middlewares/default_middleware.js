const errorResponse = require('../utils/error_response')

module.exports = function defaultMiddlewareWrapper (useCase) {
  return async function defaultMiddleware (request, response) {
    try {
      const params = request.params
      const query = request.query
      const rawData = request.body
      const result = await useCase({ ...query, ...params, rawData })
      response.json(result)
    } catch (error) {
      return errorResponse(error, response)
    }
  }
}
