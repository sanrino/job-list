const ApiError = (status, message) => ({ status, message });

const badRequest = (message) => ApiError(404, message);

const internal = (message) => {
  return ApiError(500, message);
}

const forbidden = (message) => {
  return ApiError(403, message);
}

const isApiError = error => typeof error === 'object' && 'status' in error && 'message' in error;

module.exports = {
  ApiError,
  badRequest,
  internal,
  forbidden,
  isApiError
};

// const ApiError = require('./ApiErrorModule'); // Replace with the actual module path

// const badRequestError = ApiError.createBadRequest('Bad request');
// const internalError = ApiError.createInternalError('Internal server error');
// const forbiddenError = ApiError.createForbiddenError('Forbidden');


