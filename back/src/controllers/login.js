const { User } = require("../db");

const login = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password)
    return res.status(400).send("Faltan datos");

  try {
    const user = await User.findOne({ where: { email: body.email } });

    if (!user) return res.status(400).send("Usuario no encontrado");

    if (user.password !== body.password)
      return res.status(403).send("Contraseña incorrecta");

    return res.json({ access: true });
  } catch (error) {
    return res.status(500).send({ mensaje: "Error interno del servidor" });
  }
};

module.exports = login;
