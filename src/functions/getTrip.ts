import { Transport } from "../structures/Transport";
import { TransportWay } from "../structures/TransportWay";
import { getStations } from "./getStations";
import { Station } from "../structures/Station";

/**
 * Returns all trips from origin to destination
 * @param Origin Station where the trip starts
 * @param Destination Station where the trip ends
 * @returns {<Promise<TransportWay[]>>} List of possible ways to get from origin to destination
 */
export const getTrip = async (origin: Station, destination: Station) => {
    require("dotenv").config();
    const query = `accessId=${process.env.RMV_ACCESS_ID}&originId=${origin.hafas_id}&destId=${destination.hafas_id}&format=json`;
    const response = await fetch("https://www.rmv.de/hapi/trip?" + query);

    // check if response is ok
    if (!response.ok) throw new Error("Error: " + response.status);

    // get data from response
    const data = await response.json();
    const list_of_trips = data["Trip"];
    let list_of_way: TransportWay[] = [];
    //todo
    const stations = await getStations();

    // loop through all trips, create TransportWay objects and push them to list_of_way
    for (let i = 0; i < list_of_trips.length; i++) {
        const trip = list_of_trips[i];
        let myTransportWay = new TransportWay(
            origin,
            destination,
            trip.Origin.date,
            trip.Origin.time,
            trip.Destination.date,
            trip.Destination.time,
            []
        );

        // loop through all legs of the trip, create Transport objects and push them to myTransportWay.using
        const list_of_legs = trip.LegList.Leg;
        for (let j = 0; j < list_of_legs.length; j++) {
            const leg = list_of_legs[j];
            const origin_station = stations.get(leg.Origin.extId);
            const destination_station = stations.get(leg.Destination.extId);
            if (!origin_station || !destination_station)
                throw new Error("Error: Station not found");
            const transport = new Transport(
                origin_station,
                destination_station,
                leg.Origin.date,
                leg.Origin.time,
                leg.Destination.date,
                leg.Destination.time,
                leg.name
            );
            myTransportWay.using.push(transport);
        }

        list_of_way.push(myTransportWay);
    }

    return list_of_way;
};
