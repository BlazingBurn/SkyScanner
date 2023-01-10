export interface Flight {
    id: string;
    price: Price;
    legs: Legs[];
    score: number;
    totalDuration: number;
}

interface Price {
    amount: number;
    update_status: string;
    last_updated: string;
    quote_age: number;
    score: number;
    transer_type: string;
}

export interface Legs {
    id: string;
    origin: Origin;
    destination: Destination;
    departure: string;
}

export interface LegsRename {
    origin: string;
    destination: string;
    date: string;
}

interface Origin {
    display_code: string;
}

interface Destination {
    display_code: string;
}