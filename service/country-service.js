const getCountryById = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT country_id, country, last_update FROM country WHERE country_id=$1",
      [req.params.id]
    );
    return rows;
  } catch (err) {
    req.log.error(err);
  }
};

const getCountryByName = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT country_id, country, last_update FROM country WHERE upper(country) like $1",
      ["%" + req.query.name.toUpperCase() + "%"]
    );
    return rows;
  } catch (err) {
    req.log.error(err);
  }
};

module.exports = {
  getCountryById,
  getCountryByName,
};
