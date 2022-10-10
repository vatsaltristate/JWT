const router = require("express").Router();
const { createUser, login, getUserByUserId, getUsers, updateUsers, deleteUser} = require("./user.controller");
const {checkToken} = require("../../auth/verify.middleware.js");

router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/",checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);


module.exports = router;