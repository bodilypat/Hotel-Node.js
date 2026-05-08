//src/core/errors/ValidationError.js

class ValidationError extends Error {
  constructor(message, details = null) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ValidationError; 