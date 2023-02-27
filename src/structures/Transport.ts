import { Station } from "./Station";

export class Transport {
    departure: Station;
    destination: Station;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    using: string;

    constructor(
        departure: Station,
        destination: Station,
        departure_date: string,
        departure_time: string,
        arrival_date: string,
        arrival_time: string,
        using: string
    ) {
        this.departure = departure;
        this.destination = destination;
        this.departure_date = departure_date;
        this.departure_time = departure_time;
        this.arrival_date = arrival_date;
        this.arrival_time = arrival_time;
        this.using = using;
    }
}
