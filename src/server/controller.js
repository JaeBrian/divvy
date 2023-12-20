const models = require('./db');

const modelController = {};

modelController.login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  models.User.findOne({ username })
    .then((data) => {
      if (data.password === password) {
        res.locals.user = data;
        return next();
      }
    })
    .catch(() => {
      return next({
        log: 'oopsiesss',
        message: {
          err: 'uhhhohhh',
          status: 500,
        },
      });
    });
};

modelController.signup = (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  models.User.create({
    firstName,
    lastName,
    username,
    email,
    password,
  })
    .then((user) => {
      res.locals.user = user;
      return next();
    })
    .catch(() => {
      return next({
        log: 'oopsiesss',
        message: {
          err: 'uhhhohhh',
          status: 500,
        },
      });
    });
};

modelController.editProfile = (req, res, next) => {
  const { id } = req.params;
  const { username, email } = req.body;

  models.User.findByIdAndUpdate(id, { username, email })
    .then((user) => {
      res.status(200).json({ message: 'Profile updated successfully', user });
    })
    .catch((err) => next(err));
};

modelController.getUser = (req, res, next) => {
  const { id } = req.params;

  models.User.findById(id)
    .populate({
      path: 'subscriptions',
      populate: {
        path: 'subscribers',
        model: 'member',
      },
    })
    .then((user) => {
      res.locals.user = user;
      console.log(user);
      return next();
    })
    .catch((error) => {
      return next({
        log: 'error in get user data',
        message: {
          err: 'Error fetching user with subscriptions: ' + error,
          status: 500,
        },
      });
    });
};

//   x      v
// user -> subs -> members
modelController.getSubscription = (req, res, next) => {
  const { _id } = req.query;
  const { username } = req.body;

  models.Member.create({ username })
    .then((newMember) => {
      return models.Subscription.findOneAndUpdate(
        { _id },
        { $push: { subscribers: newMember._id } },
        { new: true }
      );
    })
    .then((data) => {
      res.locals.updatedSub = data;
      return next();
    })
    .catch(() => {
      return next({
        log: 'error in getSubscription',
        message: {
          err: 'uhhhohhh',
          status: 500,
        },
      });
    });
};

modelController.addSubscription = (req, res, next) => {
  const { planName, monthlyCost } = req.body;
  const user = res.locals.user;

  models.Subscription.create({ planName, monthlyCost })
    .then((newSubscription) => {
      return models.User.findByIdAndUpdate(
        user._id,
        { $push: { subscriptions: newSubscription } },
        { new: true }
      );
    })
    .then((updatedUser) => {
      res.locals.newuser = updatedUser;
      return next();
    })
    .catch(() => {
      return next({
        log: 'error in get user',
        message: {
          err: 'uhhhohhh',
          status: 500,
        },
      });
    });
};

modelController.returnSubscription = () => {
  const { id } = req.query;

  models.Subscription.findById(id)

    .then((data) => {
      res.locals.data = data.planName;
      return next();
    })

    .catch(() => {
      return next({
        log: 'error in get subs',
        message: {
          err: 'uhhhohhh',
          status: 500,
        },
      });
    });
};

modelController.returnMember = () => {
  const { id } = req.query;

  models.Member.findById(id)
    .then((data) => {
      res.locals.member = data;
      return next();
    })

    .catch(() => {
      return next({
        log: 'error in get member',
        message: {
          err: 'uhhhohhh',
          status: 500,
        },
      });
    });
};

module.exports = modelController;
