export interface FlightDetailsInterface {
    legs: Legs[];
    pricingOptions: PricingOptions[];
    linked: Linked;
}

interface Legs {
    origin: Origin;
    destination: Destination;
    departure: string;
    duration: number;
}

interface Origin {
    name: string;
    display_code: string;
    city: string;
}

interface Destination {
    display_code: string;
    name: string;
    city: string;
}

interface PricingOptions {
    agents: Agents[];
    totalPrice: number;
}

interface Agents {
    name: string;
    isCarrier: boolean;
    url: string;
    price: number;
    rating: Rating;
    updateStatus: string;
    quoteAge: number;
}

interface Rating {
    value: number;
    count: number;
}

interface Linked {
    entertainments: Entertainments[];
}

interface Entertainments {
    cost: string;
    display_text: string;
    exists: string;
    quality: string;
    type: string;
}