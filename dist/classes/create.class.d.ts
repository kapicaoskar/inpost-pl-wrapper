export declare class Create {
    apiKey: string;
    constructor(apiKey: string);
    Package(orgId: string, data: any): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: any;
    }>;
}
//# sourceMappingURL=create.class.d.ts.map