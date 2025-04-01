const express = require("express");
const router = express.Router();
const userController = require('../Controllers/userControllers');


router.post("/adduser", userController.createUser);
router.get("/getusers",userController.getUser);
router.delete("/deleteuser/:id",userController.deleteUser)

module.exports = router;