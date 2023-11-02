const { Favorite } = require("../db");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender)
    return res.status(401).send("Faltan datos");

  try {
    const { charFav, created } = await Favorite.findOrCreate({
      where: { id },
      defaults: {
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    const charsFav = await Favorite.findAll();
    return res.json(charsFav);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = postFav;
