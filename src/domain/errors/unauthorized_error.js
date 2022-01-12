function UnauthorizedError (message) {
  this.name = 'UnauthorizedError'
  this.message = message || 'Unauthorized error'
  this.stack = (new Error()).stack
}

UnauthorizedError.prototype = new Error()

module.exports = UnauthorizedError
