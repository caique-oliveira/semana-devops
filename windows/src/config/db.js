const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'password',
  host: '172.18.0.1',
  port: 5432,
  database: 'launchstore'
});
