const { Router, application } = require("express");
const router = Router();
const path = require("path");


router.get("/PPCalculator", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname+"/../../client/other/tools/taiko/taikoppcalculator.html"))
});

module.exports = router;