const service = require('../service/country-service')

async function countryController(fastify, options) {
  const client = fastify.db.client;

  fastify.get("/country-by-id/:id", async (req, reply) => {
    let res = await service.getCountryById(req, client);
    reply.send(res);
  });

  fastify.get("/country-by-name", async (req, reply) => {
    let res = await service.getCountryByName(req, client);
    reply.send(res);
  });
}
module.exports = countryController;
