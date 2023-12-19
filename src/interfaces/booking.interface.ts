import { Schema } from "mongoose";

interface Ibooking {
    tour: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    price: number;
    createdAt: Date;
    paid: boolean;
}

export {Ibooking};