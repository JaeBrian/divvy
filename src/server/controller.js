const models = require('./db')

const modelController = {};

modelController.login = (req, res, next) => {
  l
}


modelController.signup = (req, res, next) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
  } = req.body
  
  models.User.create({
    firstName,
    lastName,
    username,
    email,
    password,
  })
.then((user) => {
  return next();
})
.catch(() => {
  return next({
    log: 'oopsiesss',
    message: {
      err: 'uhhhohhh',
      status: 500,
    }
  })
})

}

modelController.editprofile = (req, res, next) => {
  const { username,  }
}

modelController.adduser = (req, res, next) => {
  
}

modelController.addsub = (req, res, next) => {
  
}

modelController.getsubscription = (req, res, next) => {
  
}

modelController.addsubscription = (req, res, next) => {
  
}

module.exports = modelController;