function NotFoundError (message) {
  this.name = 'NotFoundError'
  this.message = message || 'Not found error'
  this.stack = (new Error()).stack
}

NotFoundError.prototype = new Error()

module.exports = NotFoundError
