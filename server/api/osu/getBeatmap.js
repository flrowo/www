const {Request, Response} = require("express");
const fetchBeatmap = require("../../helpers/osu/fetchBeatmap");
/**
 * @param {Request} req 
 * @param {Response} res 
 */
module.exports = async(req, res) => {
    const beatmapId = req.query.id;
    if (isNaN(beatmapId) || !beatmapId) return res.status(400).send({
        status: 400,
        message: "VAI TOMA NO CU"
    });

    const beatmap = await fetchBeatmap(beatmapId);
    if (beatmap.status != 200 || beatmap.data.length == 0) return res.status(404).send({
        status: 404,
        message: "not foud"
    });

    return res.status(200).send({status:200, data: beatmap.data[0]});

}