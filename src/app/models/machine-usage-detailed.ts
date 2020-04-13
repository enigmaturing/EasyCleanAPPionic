export interface MachineUsageDetailed {
    id: number;
    userId: number;
    date: Date;
    machineLabeledAs: string;
    iconUrl: string;
    totalAmountPaid: number;
    totalDurationInMinutes: number;
    tariffName: string;
    quantityOfServicesBooked: string;
    pricePerServiceBooked: number;
    durationPerServiceBooked: number;
}
