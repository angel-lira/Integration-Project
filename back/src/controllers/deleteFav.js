const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    await Favorite.destroy({
      where: {
        id: id,
      },
    });

    const charsFav = await Favorite.findAll();

    return res.json(charsFav);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = deleteFav;
