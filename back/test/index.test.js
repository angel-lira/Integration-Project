const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const users = require("../src/utils/users");

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde un objeto con las propiedades: id, name, species, gender, status, origin y image", async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
      const body = response.body;

      expect(body).toHaveProperty(
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image"
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/0").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("La informacion de login es correcta", async () => {
      const response = await agent
        .get("/rickandmorty/login/")
        .query(users[0])
        .expect(200);

      expect(response.body).toEqual({ access: true });
    });

    it("La informacion de login es incorrecta", async () => {
      const response = await agent
        .get("/rickandmorty/login/")
        .query({
          email: "users@mail.com",
          password: "0000",
        })
        .expect(400);

      expect(response.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const characterUno = { id: 1, name: "Rick Sanchez" };
    const characterDos = { id: 2, name: "Morty Smith" };

    it("Devuelve el elemento enviado por body", async () => {
      const response = await agent.post("/rickandmorty/fav").send(characterUno);
      const body = response.body;

      expect(body).toContainEqual(characterUno);
    });

    it("Devuelve el elemento previo y el actual", async () => {
      const response = await agent.post("/rickandmorty/fav").send(characterDos);
      const body = response.body;

      expect(body).toContainEqual(characterUno);
      expect(body).toContainEqual(characterDos);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const characterUno = { id: 1, name: "Rick Sanchez" };
    const characterDos = { id: 2, name: "Morty Smith" };

    it("Si el ID no existe, devuelve el arreglo sin modificar", async () => {
      const response = await agent.delete("/rickandmorty/fav/0");
      const body = response.body;

      expect(body).toContainEqual(characterUno);
      expect(body).toContainEqual(characterDos);
    });

    it("Cuando se envia un ID valido, elimina correctamente al personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
      const body = response.body;

      expect(body).not.toContainEqual(characterUno);
    });
  });
});
