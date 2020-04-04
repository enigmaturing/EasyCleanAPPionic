export interface User {
    id: number;
    name: string;
    surname: string;
    lastActive: Date;
    street: string;
    number: number;
    zip: number;
    photoUrl: string;
    remainingCredit: number;
    age?: number;
    city?: string;
    country?: string;
    roles?: string[];
}
