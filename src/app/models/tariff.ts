export interface Tariff {
    name: string;
    price: number;
    durationInMinutes: number;
    isActive: boolean;
    machineGroupId: number;
}