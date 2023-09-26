const url = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${url}${id}`);
    const data = response.data;
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
      location: data.location,
    };

    return character
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;
