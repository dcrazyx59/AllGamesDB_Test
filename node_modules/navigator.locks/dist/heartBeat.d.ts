export declare class HeartBeat {
    private _key;
    private _heartBeatIntervalTime;
    private _heartBeatDetectIntervalTime;
    private _heartBeatIntervalId;
    private _heartBeatDetectIntervalId;
    constructor({ key, heartBeatIntervalTime, heartBeatDetectIntervalTime, }: {
        key: string;
        heartBeatIntervalTime?: number;
        heartBeatDetectIntervalTime?: number;
    });
    start(): void;
    destroy(): void;
    private _setLocalTime;
    detect(cb: () => void): void;
}
//# sourceMappingURL=heartBeat.d.ts.map