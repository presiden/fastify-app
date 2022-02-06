const getCityById = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT city_id, city, country_id FROM city WHERE city_id=$1",
      [req.params.id]
    );
    return rows;
  } catch (err) {
    req.log.error(err);
  }
};

const getCityByName = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT city_id, city, country_id FROM city WHERE upper(city) like $1",
      ["%" + req.query.name.toUpperCase() + "%"]
    );
    return rows;
  } catch (err) {
    req.log.error(err);
  }
};

const getCityByCountryId = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT city_id, city, country_id FROM city WHERE country_id=$1",
      [req.params.country_id]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCityById,
  getCityByName,
  getCityByCountryId,
};
