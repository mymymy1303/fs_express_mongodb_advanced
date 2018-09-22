import express from 'express'
const router = express.Router();
import User from '../models/user.model'

/* GET users listing. */
router.get('/:id', function (req, res, next) {

	let query = User.find({ key: req.params.id })

	query.exec()
		.then(item => {
			res.render('usersdetails', {
				data: item[0]
			});
		})
		.catch(err => console.err(err))
});

export default router;
