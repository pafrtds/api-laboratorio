const path = require("path")

module.exports = {
  "development": {
    "username": "dev",
    "password": "dev",
    "database": "dev",
    "host": "db",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "dialect": "sqlite",
    "storage": path.resolve('database.sqlite')
  },
  "production": {
    "username": "root",
    "password": "dev",
    "database": "dev",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 5432
  }
}
