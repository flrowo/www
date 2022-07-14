const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const toolsRoutes = require("./routes/toolsRoutes");
const apiRoutes = require("./api/apiRoutes");
const app = express();

module.exports = () => {
    app.use("/tools/", toolsRoutes);

    app.use("/api/", apiRoutes);

    app.listen(process.env.PORT||3000, () => console.log("tá roadano"));
}