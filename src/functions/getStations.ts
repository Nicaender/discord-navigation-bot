import { Station } from "../structures/Station";

/**
 * Returns all stations from the csv file
 * @returns {Promise<Station[]>} Array of Station objects
 */
export const getStations = async () => {
    const csvToJson = require("csvtojson");
    const filepath =
        "./data/RMV_Haltestellen_Tarifperiode_2022_23_Stand_2022-12-21.csv";
    const stationsJSON = await csvToJson({ delimiter: ";" }).fromFile(filepath);
    const stations: Station[] = stationsJSON.map(
        (station: any) => new Station(station)
    );
    return stations;
};
