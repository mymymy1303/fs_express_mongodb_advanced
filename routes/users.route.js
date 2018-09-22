import express from 'express';
import userController from './../controllers/users.controller'
import User from './../models/user.model'


const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
	let query = User.find();

	query.exec()
		.then(docs => {
			res.render('users', {
				title: 'Users List',
				data: docs
			});
		})
		.catch(err => console.err(err))
});

export default router;
