const router = require('express').Router({});

const users = [
	{ id: 1, username: 'user1', password: 'user1', role: 'admin' },
	{ id: 2, username: 'user2', password: 'user2', role: 'client' },
	{ id: 3, username: 'user3', password: 'user3', role: 'client' },
	{ id: 4, username: 'user4', password: 'user4', role: 'client' },
	{ id: 5, username: 'user5', password: 'user5', role: 'client' }
];

router.get('/', (req, res) => {
	if (response.length === 0) {
		res.status(404).json({ type: 'error', msg: 'No user found!' });
	} else {
		res.status(200).json(users);
	}
});

router.get('/:id', (req, res) => {
	const response = users.filter(user => user.id == req.params.id);
	if (response.length === 0) {
		res.status(404).json({ type: 'error', msg: 'No user found!' });
	} else {
		res.status(200).json(response);
	}
});

router.post('/', (req, res) => {
	const response = users.push(req.body);
	res.status(200).json(response);
});

router.put('/:id', (req, res) => {
	const response = users.push(req.body);
	res.status(200).json(response);
});

router.delete('/:id', (req, res) => {
	const response = users.push(req.body);
	res.status(200).json(response);
});

module.exports = router;
