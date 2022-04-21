const express = require("express");
const router = express.Router();
const {
  setItem,
  getItems,
} = require("../controllers/itemController");

router.post("/", setItem);
router.get("/", getItems);

module.exports = router;
