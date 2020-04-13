export interface UserCreate {
    name: string;
    surname: string;
    email: string;
    userName: string;
    password: string;
    gender: string;
    dateOfBirth: Date;
    street: string;
    number: number;
    zip: number;
    city: string;
    country: string;
    photoUrl: string;
    roles: string[];
}
