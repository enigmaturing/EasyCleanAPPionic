import { Topup } from './topup';
import { MachineUsage } from './machine-usage';

export interface UserDetailed {
    id: number;
    email: string;
    name: string;
    surname: string;
    gender: string;
    dateOfBirth: Date;
    created: Date;
    lastActive: Date;
    street: string;
    number: number;
    zip: number;
    city: string;
    photoUrl: string;
    remainingCredit: number;
    machineUsages: MachineUsage[];
    topups: Topup[];
}
