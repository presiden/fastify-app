const getActorById = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT actor_id, first_name, last_name, last_update FROM actor WHERE actor_id=$1",
      [req.params.id]
    );
    return rows;
  } catch (err) {
    req.log.error(err);
  }
};

const getActorByName = async (req, client) => {
  try {
    const { rows } = await client.query(
      "SELECT actor_id, first_name, last_name, last_update FROM actor where upper(concat(first_name, ' ', last_name)) like $1",
      ["%" + req.query.name.toUpperCase() + "%"]
    );
    return rows;
  } catch (err) {
    req.log.error(err);
  }
};

module.exports = {
  getActorById,
  getActorByName,
};
