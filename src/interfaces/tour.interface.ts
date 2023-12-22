import { Model } from "mongoose";

/* eslint-disable @typescript-eslint/ban-types */
interface Itour {
    name: string;
    durationHours: number;
    ratingAverage: number;
    ratingQuantity: number;
    price: number;
    imageCover: string;
    images: string[];
    createdAt: Date;
    startDates: Date[];
    startLocation: string;
    locations: string[];
    slug: string;
}

interface ITourMethods {
    getNextNearestDateAndEndDate(): {
        nearestStartDate: Date | null;
        estimatedEndDate: Date | null;
    }
}
type TTourModel = Model<Itour, {},ITourMethods>;

export {Itour, ITourMethods, TTourModel};