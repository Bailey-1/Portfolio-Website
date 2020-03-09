'use strict';
const config = require('./config');
const Postgres = require('pg').Client;

const sql = new Postgres(config);
sql.connect();

sql.on('error', err => {
	console.error('SQL Fail', err);
	sql.end();
});

async function selectAll(id) {
	const q = `SELECT * FROM table2 WHERE acc_id = '${id}' ORDER BY pro_name;`;
	const result = await sql.query(q);
	return result.rows;
}

module.exports = {
	selectAll
};
