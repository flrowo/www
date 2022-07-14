const axios = require("axios");

module.exports = async(beatmapId) => {
    try {
        const map = await axios(`https://osu.ppy.sh/api/get_beatmaps?k=${process.env.OSU_KEY}&b=${beatmapId}`);
        return {status:200, data: map.data};
    } catch (error) {
        return {status:404, data: []};
    }
}