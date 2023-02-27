import { Station } from "./Station";
import { Transport } from "./Transport";

export class TransportWay {
    departure: Station;
    destination: Station;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    using: Transport[];

    constructor(
        departure: Station,
        destination: Station,
        departure_date: string,
        departure_time: string,
        arrival_date: string,
        arrival_time: string,
        using: Transport[]
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
