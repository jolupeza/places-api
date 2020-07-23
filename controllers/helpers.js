function paramsBuilder(validParams, body) {
  let params = {};

  validParams.forEach(attribute => {
    if (Object.prototype.hasOwnProperty.call(body, attribute)) {
      params[attribute] = req.body[attribute];
    }
  });

  return params;
}

module.exports = {
  paramsBuilder
}
