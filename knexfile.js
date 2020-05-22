const pg = require('pg');
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  staging: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'staging',
      user:     'postgres',
      password: 'postgres'      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgres',    
    connection: 'postgres: // arysrvxdzgpaoo : 4658c0f9132561803ff581b2ab6385c4f8dc9c5b059d5e162776706a4e8e483e @ ec2-54-86-170-8.compute-1.amazonaws.com : 5432 / d9vq456347',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

},
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0,
pg.defaults.ssl = true;

