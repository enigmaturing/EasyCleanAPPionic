import { Machine } from './machine';
import { Tariff } from './tariff';

export interface MachineGroup {
    id: number;
    machines: Machine[];
    tariffs: Tariff[];
    iconUrl: string;
    typeName: string;
    numberOfAvailableMachines: number;
}
