const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const register = require("../controllers/register");
const deleteFav = require("../controllers/deleteFav");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
