const { User } = require("../db");

const register = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }

  const verification = await User.findOne({ where: { email: body.email } });

  if (verification) {
    return res.status(400).json({ mensaje: "Email ya existe" });
  }

  try {
    const createUser = await User.create({
      email: body.email,
      password: body.password,
    });

    return res.json({ access: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = register;
