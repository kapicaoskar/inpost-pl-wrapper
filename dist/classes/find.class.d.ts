export declare class Find {
    apiKey: string;
    constructor(apiKey: string);
    stashesInRadius(radius: string, postalCode: string): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: any;
    }>;
    shipmentTracking(trackingNumber: string): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: any;
    }>;
    allStatuses(): Promise<{
        message: string;
        data: any;
    }>;
    organizationInfo(): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: any;
    }>;
}
//# sourceMappingURL=find.class.d.ts.map