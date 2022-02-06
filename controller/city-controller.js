const service = require('../service/city-service')

async function cityController(fastify, options) {
  const client = fastify.db.client;

  fastify.get("/city-by-id/:id", async (req, reply) => {
    let res = await service.getCityById(req, client);
    reply.send(res);
  });

  fastify.get("/city-by-name", async (req, reply) => {
    let res = await service.getCityByName(req, client);
    reply.send(res);
  });

  fastify.get("/city-by-country-id/:country_id", async (req, reply) => {
    let res = await service.getCityByCountryId(req, client);
    reply.send(res);
  });
}
module.exports = cityController;
