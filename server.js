const express = require('express');
const app = express();

app.use(express.json()); //expect json data from client. get data as object

app.use(
	express.static('public', {
		index: 'index.html', // Set default page for domain:port
		extensions: ['html'] // Hide extensions
	})
);

// Make these public so they can be accessed by the front end.
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));
app.use('/bulma', express.static(__dirname + '/node_modules/bulma/'));

app.listen(8080);
