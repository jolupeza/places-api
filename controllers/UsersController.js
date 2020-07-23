const User = require('./../models/User');
const paramsBuilder = require('./helpers').paramsBuilder;

const validParams = ['email', 'name', 'password'];

function store(req, res, next) {
  let params = paramsBuilder(validParams, req.body);

  User.create(params)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(error => {
      console.error(error);
      res.status(422).json({ error })
    })
}



module.exports = {
  store
}
