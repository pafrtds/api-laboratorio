const assert = require('assert')

const ErrorStatusCodes = Object.freeze({
  TypeError: 400,
  BadRequestError: 400,
  UnauthorizedError: 401,
  ForbiddenError: 403,
  NotFoundError: 404
})

module.exports = function (error) {
  assert(error instanceof Error)

  return ErrorStatusCodes[error.name] || 400
}
