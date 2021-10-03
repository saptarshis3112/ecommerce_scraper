const statusCode = require("../status-codes");

/**
 * Handle success response
 * @param {*} h 
 * @param {*} code 
 * @param {*} data 
 * @returns
 */
const success = (h, code, data) => {

  const responseObject = {
    status: statusCode[code],
  };

  if (data) {
    responseObject.data = data;
  }

  return h.response(responseObject).code(responseObject.status.status_code);

};

/**
 * Handle error response
 * @param {*} h 
 * @param {*} code 
 * @param {*} error 
 * @returns 
 */
const error = (h, code, error) => {

  const responseObject = {
    status: statusCode[code],
  };

  if (error) {
    console.log("code", error);
    responseObject.status.message = error.message;
  }

  return h.response(responseObject).code(responseObject.status.status_code);

};

module.exports = {
  success,
  error,
};
