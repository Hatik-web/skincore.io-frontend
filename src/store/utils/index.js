export const getStatusCode = (error) => error.response?.data?.statusCode;

export const getErrorMessage = (error) => error.response?.data?.message;

export const getValidationErrors = (error) => {
  const message = getErrorMessage(error);
  return error.response?.data?.errors || [message];
};
