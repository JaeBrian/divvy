const express = require('express');
const modelController = require('./controller');
const router = express.Router();

router.get('/login', modelController.login, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/signup', modelController.signup, (req, res) =>
  res.status(200).json({})
);

router.get('/getuser/:id', modelController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post(
  '/addsubscriber/:id',
  // modelController.getUser,
  modelController.getSubscription,
  (req, res) => res.status(200).json({})
);

router.post('/editprofile/:id', modelController.editProfile, (req, res) =>
  res.status(200).json({})
);

router.get('/getsubscription', modelController.getSubscription, (req, res) =>
  res.status(200).json(res.locals.updatedSub)
);

router.get(
  '/getsubname/:id',
  modelController.returnSubscription,
  (req, res) => {
    res.status(200).json(res.locals.data);
  }
);

router.get('/getmembername/:id', modelController.returnMember, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.post(
  '/addsubscription/:id',
  modelController.getUser,
  modelController.addSubscription,
  (req, res) => res.status(200).json({})
);

module.exports = router;
