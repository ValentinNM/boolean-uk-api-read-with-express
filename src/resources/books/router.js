const express = require("express");

const { createOne, getAllBooks } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.get("/", getAllBooks);

module.exports = router;
