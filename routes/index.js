const apiController = app => {
	//USERS API
	app.use('/api/users', require('./users'));

	//AUTH API
	app.use('/api/auth', require('./auth'));
};

module.exports = apiController;
