const service = require('../service/actor-service')

async function actorController(fastify, options) {
  const client = fastify.db.client;

  fastify.get("/actor-by-id/:id", async (req, reply) => {
    let res = await service.getActorById(req, client);
    reply.send(res);
  });

  fastify.get("/actor-by-name", async (req, reply) => {
    let res = await service.getActorByName(req, client);
    reply.send(res);
  });
}
module.exports = actorController;
