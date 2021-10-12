const express = require("express");

const { createOne, getAllBooks, getBookById} = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.get("/", getAllBooks);

router.get("/:id", getBookById);

// router.get("/", (req, res) => {
//     console.log("get router in books: ", res.json({data : "works"}))
// }) ;
module.exports = router;