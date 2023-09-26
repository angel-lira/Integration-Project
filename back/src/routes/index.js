const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");

const router = require("express").Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;

// router.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

// router.get("/login", (req, res) => {
//   login(req, res);
// });

// router.post("/login", (req, res) => {
//   postUser(req, res);
// });
// router.post("/fav", (req, res) => {
//   postFav(req, res);
// });

// router.delete("/fav/:id", (req, res) => {
//   deleteFav(req, res);
// });
