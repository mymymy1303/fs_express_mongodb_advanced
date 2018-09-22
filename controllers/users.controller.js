import User from './../models/user.model'

const controller = {};

controller.getAll = async (req, res) => {
	try {
		const users = Users.getAll()
		res.send(users)
	} catch (error) {
		
	}
}

export default controller;