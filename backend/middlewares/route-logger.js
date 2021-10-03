/**
 * Logs every route name and their method.
 * @param {*} req 
 * @param {*} h 
 * @returns 
 */
module.exports = (req, h) => {
  console.log(`${req.method.toUpperCase()} | ${req._core.info.uri + req.path}`);
  return h.continue;
};
