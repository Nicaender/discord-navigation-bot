const csvToJson = require("csvtojson");
const filepath =
    "./data/RMV_Haltestellen_Tarifperiode_2022_23_Stand_2022-12-21.csv";

export const getAllStations = async () => {
    const stations = await csvToJson().fromFile(filepath);
    return stations;
};
