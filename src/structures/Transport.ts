import { Station } from "./Station";

export class Transport {
    departure: Station;
    destination: Station;
    departure_time: string;
    arrival_time: string;
    using: string;

    constructor(
        departure: Station,
        destination: Station,
        departure_time: string,
        arrival_time: string,
        using: string
    ) {
        this.departure = departure;
        this.destination = destination;
        this.departure_time = departure_time;
        this.arrival_time = arrival_time;
        this.using = using;
    }
}
