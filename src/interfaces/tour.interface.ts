interface Itour {
    name: string;
    duration: number;
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

export {Itour};