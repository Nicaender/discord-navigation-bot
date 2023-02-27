const csvToJson = require("csvtojson");
const filepath =
    "./data/RMV_Haltestellen_Tarifperiode_2022_23_Stand_2022-12-21.csv";

/**
 * Returns all stations from the csv file
 * @returns {Promise<Station[]>}
 */
export const getStations = async () => {
    const stations = await csvToJson({ delimiter: ";" }).fromFile(filepath);
    return stations;
};
