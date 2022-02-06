const fastify = require("fastify")({
  logger: true,
});
const path = require('path')
const autoload = require('fastify-autoload')
const database = require('./config/database')

fastify.get("/", async (req, reply) => {
  reply.send("dvdrental api");
});

fastify.register(database);
fastify.register(autoload, {
  dir: path.join(__dirname, 'controller')
})

// Run the server!
let port = 3000;
const start = async () => {
  try {
    await fastify.listen(port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
