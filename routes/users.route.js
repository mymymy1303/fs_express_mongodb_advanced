import express from 'express';
import User from './../models/user.model';


const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
	let query = User.find()
		.sort({
			username: 1
		});

	query.exec()
		.then(docs => {
			res.json(docs)
		})
		.catch(err => console.err(err))
});

export default router;
