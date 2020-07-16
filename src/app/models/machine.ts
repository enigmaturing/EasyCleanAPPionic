export interface Machine {
    id: number;
    labeledAs: number;
    isBlocked: boolean;
    groupName: string;
    iconUrl: string;
    dateOfLastUsage: Date;
    dateBusyUntil: Date;
}
