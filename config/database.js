const fastifyPlugin = require("fastify-plugin");
const { Pool } = require("pg");
const fs = require("fs");
const rawdata = fs.readFileSync("./config/database.json");
const db = JSON.parse(rawdata);
const POOL_MAX = 10;

const client = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
  max: POOL_MAX,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

async function dbConnector(fastify, options) {
  try {
    await client.connect();
    fastify.log.info("db connected succesfully");
    fastify.decorate("db", { client });
  } catch (err) {
    fastify.log.error(err);
  }
}

module.exports = fastifyPlugin(dbConnector);
