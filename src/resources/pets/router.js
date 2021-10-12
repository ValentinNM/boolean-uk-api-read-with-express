const express = require("express");

const { createOne, getAllPets } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.get("/", getAllPets)

module.exports = router;
