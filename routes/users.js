var express = require('express');
var router = express.Router();
var User = require("../models/user.model")

/* GET users listing. */
router.get('/', (req, res, next) => {
	let query = User.find()
	query.exec()
		.then((data => {
			res.render('users', {
				title: 'Users',
				data: data
			})
		}))
});

module.exports = router;
