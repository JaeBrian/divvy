const express = require('express');
const router = express.Router();

router.get('/login', modelController.login, (req, res) => {res.status(200).json({})});

router.post('/signup', modelController.signup, (req, res) => res.status(200).json({}));

router.post('/adduser', modelController.adduser, (req, res) => res.status(200).json({}));

router.post('/addsub', modelController.addsub, (req, res) => res.status(200).json({}));

router.patch('/editprofile', modelController.editprofile, (req, res) => res.status(200).json({}));

router.get('/getsubscription', modelController.getsubscription, (req, res) => res.status(200).json({}));

router.post('/addsubscription', modelController.addsubscription, (req, res) => res.status(200).json({}));

module.exports = router;
