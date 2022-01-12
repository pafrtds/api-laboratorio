const errorStatusCode = require('./error_status_code')

module.exports = function errorResponse (error, response) {
  return response.status(errorStatusCode(error)).json({ errorMessage: error.message })
}
