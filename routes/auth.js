const router = require('express').Router();
const jwt = require('jsonwebtoken');

const users = [
	{ id: 1, username: 'user1', email: 'user1@gmail.com', password: 'user1' },
	{ id: 2, username: 'user2', email: 'user2@gmail.com', password: 'user2' }
];

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	let response = users.filter(
		user => user.username == username && user.password == password
	);

	if (response == 0) {
		res.status(404).json({
			type: 'error',
			message: 'Invalid Username/Password'
		});
	} else {
		let user = {
			username: response[0].username,
			email: response[0].email
		};
		let token = jwt.sign(user, 'secretKey', {
			expiresIn: 86400 //token expires in 1 day
		});
		res.status(200).json({
			type: 'success',
			message: 'Successfully logged-in',
			token,
			result: user
		});
	}
});

router.post('/register', (req, res) => {
	let { id, username, email, password } = req.body;
	let errors = [];
	if (id === undefined || id === '') {
		errors.push({ type: 'error', message: 'Missing Id' });
	}
	if (username === undefined || username === '') {
		errors.push({ type: 'error', message: 'Missing Username' });
	}
	if (email === undefined || email === '') {
		errors.push({ type: 'error', message: 'Missing Email' });
	}
	if (password === undefined || password === '') {
		errors.push({ type: 'error', message: 'Missing Password' });
	}

	let duplicateUser = users.filter(
		user => user.id == id && user.username == username
	);
	if (duplicateUser.length > 0) {
		res.status(401).json({
			type: 'error',
			message: 'Duplicate User!'
		});
	}

	if (errors.length > 0) {
		res.status(404).json(errors);
	} else {
		users.push(req.body);

		let user = { id, username, email };
		let token = jwt.sign(user, 'secretKey', {
			expiresIn: 86400 //token expires in 1 day
		});
		res.status(200).json({
			type: 'success',
			message: 'Successfully Register!',
			token,
			result: user
		});
	}
});

module.exports = router;
