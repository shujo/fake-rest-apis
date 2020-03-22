const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'Welcome to Fake REST APIs' });
});

require('./routes')(app);

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
