const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) return res.status(400).send("Faltan datos");

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).send("Usuario no encontrado");

    if (user.password !== password)
      return res.status(403).send("Contraseña incorrecta");

    return res.json({ access: true });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = login;
