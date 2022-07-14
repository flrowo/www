const { Router, application } = require("express");
const router = Router();
const path = require("path");
const getBeatmap = require("./osu/getBeatmap");


router.get("/getBeatmap", getBeatmap)

module.exports = router;