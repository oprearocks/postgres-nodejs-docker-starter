const knex = require('knex');
const knexfile = require('./knexfile');
const pg = knex(knexfile[process.env.NODE_ENV]);

(async function main() {
  try {
    const [ result ] = await pg.select('email').from('users').where('occupation', 'developer');
    console.log(`Found user with email: "${result.email}"`);
  } catch (dbQueryFailedError) {
    console.error(`Unable to retrieve user information. Error: ${dbQueryFailedError}`);
  }

  process.exit(0);
})();
