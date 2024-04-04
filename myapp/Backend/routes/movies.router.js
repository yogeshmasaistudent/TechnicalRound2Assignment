const express = require("express");
const { Movie } = require("../Schema/movie");
const router = express.Router();

router.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const data = await Movie.create(payload);
    res.status(200).json(data);
    // res.status(200).json({ msg: "ADD Movies route" });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Movie.findAll();
    res.status(200).json(data);
    // res.status(200).json({ msg: "This is get data router" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  router,
};
