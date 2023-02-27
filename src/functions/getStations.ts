import { Station } from "../structures/Station";

/**
 * Returns all stations from the csv file
 * @returns {<Promise<Map<number, Station>>>} Map with all stations
 */
export const getStations = async () => {
    const csvToJson = require("csvtojson");
    const filepath =
        "./data/RMV_Haltestellen_Tarifperiode_2022_23_Stand_2022-12-21.csv";
    const stationsJSON = await csvToJson({ delimiter: ";" }).fromFile(filepath);
    const stationsMap = new Map<number, Station>();
    stationsJSON.forEach((station: any) => {
        const newStation = new Station(station);
        stationsMap.set(newStation.hafas_id, newStation);
    });
    return stationsMap;
};
