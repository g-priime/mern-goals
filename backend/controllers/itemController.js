const asyncHandler = require("express-async-handler");

const Item = require("../models/itemModel");

// @desc    Get items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();

  res.status(200).json(items);
});

// @desc    Set item
// @route   POST /api/items
// @access  Private
const setItem = asyncHandler(async (req, res) => {
  const item = await Item.create({
    img: { data: "./IMG_20140930_035059.jpg", contentType: "jpeg" },
  });

  res.status(200).json(item);
});

module.exports = {
  getItems,
  setItem,
};
