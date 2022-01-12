function ForbiddenError (message) {
  this.name = 'ForbiddenError'
  this.message = message || 'Forbidden error'
  this.stack = (new Error()).stack
}

ForbiddenError.prototype = new Error()

module.exports = ForbiddenError
